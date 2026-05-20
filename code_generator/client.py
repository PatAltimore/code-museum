import os
import time
import random
from urllib.parse import urlparse, parse_qs

from openai import AzureOpenAI, OpenAI, RateLimitError, APIStatusError, APIConnectionError
from rich.console import Console

console = Console()

_MODEL_CONFIGS = {
    "gpt-4o":                    ("aoai",    "AZURE_OPENAI_ENDPOINT",    "AZURE_OPENAI_KEY"),
    "o4-mini":                   ("aoai",    "AZURE_OPENAI_ENDPOINT",    "AZURE_OPENAI_KEY"),
    "o3-mini":                   ("aoai",    "AZURE_OPENAI_ENDPOINT",    "AZURE_OPENAI_KEY"),
    "Llama-3.3-70B-Instruct":    ("foundry", "AZURE_LLAMA_ENDPOINT",     "AZURE_LLAMA_KEY"),
    "Mistral-Large-3":           ("foundry", "AZURE_MISTRAL_ENDPOINT",   "AZURE_MISTRAL_KEY"),
    "Codestral-2501":            ("foundry", "AZURE_CODESTRAL_ENDPOINT", "AZURE_CODESTRAL_KEY"),
    "Phi-4":                     ("foundry", "AZURE_PHI4_ENDPOINT",      "AZURE_PHI4_KEY"),
}

# Reasoning models that do not accept a temperature parameter.
_REASONING_MODELS = {"o1", "o1-mini", "o3-mini", "o4-mini"}

MAX_RETRIES = 3
BASE_DELAY_S = 4

_REFUSAL_PHRASES = (
    "i can't do that",
    "i cannot do that",
    "i'm not able to",
    "i am not able to",
    "i'm unable to",
    "i am unable to",
    "i apologize, but",
    "how about i summarize",
    "instead, i can",
    "instead i can",
)


def _foundry_base_url(endpoint: str) -> tuple[str, str | None]:
    parsed = urlparse(endpoint)
    path = parsed.path.rstrip("/")
    for suffix in ("/chat/completions", "/completions"):
        if path.endswith(suffix):
            path = path[: -len(suffix)]

    api_version = parse_qs(parsed.query).get("api-version", [None])[0]

    if parsed.netloc.endswith(".services.ai.azure.com"):
        base = f"{parsed.scheme}://{parsed.netloc}{path}"
        return base, api_version

    if not path.endswith("/v1"):
        path += "/v1"
    return f"{parsed.scheme}://{parsed.netloc}{path}", api_version


class ContentFilterError(Exception):
    pass


def _is_content_filter(e: APIStatusError) -> bool:
    msg = str(e.message).lower()
    return e.status_code == 400 and (
        "content_filter" in msg
        or "content management policy" in msg
        or "responsibleaipolicyviolation" in msg
    )


def _is_refusal(text: str) -> bool:
    lower = text.lower()
    return any(phrase in lower for phrase in _REFUSAL_PHRASES)


class ModelClient:
    def __init__(self, model_config: dict):
        names = [model_config["primary"]] + model_config.get("fallback", [])
        self.models = [n for n in names if n in _MODEL_CONFIGS]
        unknown = [n for n in names if n not in _MODEL_CONFIGS]
        if unknown:
            console.print(f"[yellow]Warning: unknown model(s): {unknown}[/yellow]")

    def complete(self, messages: list[dict], **kwargs) -> str:
        for name in self.models:
            kind, endpoint_var, key_var = _MODEL_CONFIGS[name]
            endpoint = os.getenv(endpoint_var)
            key = os.getenv(key_var)
            if not endpoint or not key:
                console.print(f"  [dim]Skipping {name}: {endpoint_var}/{key_var} not set[/dim]")
                continue
            try:
                result = self._try_model(name, kind, endpoint, key, messages, **kwargs)
            except ContentFilterError:
                raise
            if result is not None:
                return result
            console.print(f"  [yellow]Falling through from {name}[/yellow]")
        raise RuntimeError("All models exhausted — check your .env values.")

    def _make_client(self, kind: str, endpoint: str, key: str):
        if kind == "aoai":
            api_version = os.getenv("AZURE_OPENAI_API_VERSION", "2024-12-01-preview")
            return AzureOpenAI(azure_endpoint=endpoint, api_key=key, api_version=api_version)
        base_url, api_version = _foundry_base_url(endpoint)
        extra = {"api-version": api_version} if api_version else {}
        return OpenAI(base_url=base_url, api_key=key, default_query=extra)

    def _try_model(self, name, kind, endpoint, key, messages, **kwargs) -> str | None:
        # Reasoning models don't accept temperature or other sampling params,
        # and use max_completion_tokens instead of max_tokens.
        if name in _REASONING_MODELS:
            kwargs = {k: v for k, v in kwargs.items()
                      if k not in ("temperature", "top_p", "presence_penalty", "frequency_penalty")}
            if "max_tokens" in kwargs:
                kwargs["max_completion_tokens"] = kwargs.pop("max_tokens")
        client = self._make_client(kind, endpoint, key)
        for attempt in range(1, MAX_RETRIES + 1):
            try:
                resp = client.chat.completions.create(model=name, messages=messages, **kwargs)
                choice  = resp.choices[0]
                content = choice.message.content
                if not content:
                    reason = getattr(choice, "finish_reason", "unknown")
                    console.print(f"  [yellow]{name} returned empty content (finish_reason={reason})[/yellow]")
                    return None
                if _is_refusal(content):
                    console.print(f"  [yellow]{name} refused — trying next model[/yellow]")
                    return None
                return content
            except RateLimitError:
                delay = BASE_DELAY_S * (2 ** attempt) + random.uniform(0, 2)
                console.print(f"  [yellow]{name} rate-limited, waiting {delay:.1f}s [{attempt}/{MAX_RETRIES}][/yellow]")
                time.sleep(delay)
            except APIStatusError as e:
                if e.status_code in (500, 502, 503):
                    delay = BASE_DELAY_S * attempt + random.uniform(0, 1)
                    console.print(f"  [yellow]{name} server error ({e.status_code}), retrying in {delay:.1f}s[/yellow]")
                    time.sleep(delay)
                else:
                    if _is_content_filter(e):
                        console.print(f"  [red]{name} content filter — aborting chain[/red]")
                        raise ContentFilterError(str(e.message))
                    console.print(f"  [red]{name} HTTP {e.status_code}: {e.message}[/red]")
                    return None
            except APIConnectionError as e:
                delay = BASE_DELAY_S * attempt
                console.print(f"  [yellow]{name} connection error, retrying in {delay}s[/yellow]")
                time.sleep(delay)
            except Exception as e:
                console.print(f"  [red]{name} unexpected error: {e}[/red]")
                return None
        return None
