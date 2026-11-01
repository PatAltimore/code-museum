---
title: "list.c"
program: "Rogue"
program_slug: "rogue"
file_path: "list.c"
language: "C"
github_url: "https://github.com/Davidslv/rogue/blob/master/list.c"
year: 1980
author: "Toy, Arnold, Wichman"
slug: "list-c"
order: 31
description: "The doubly linked lists that hold every monster and object, and where items are created and freed."

summary:
  - point: "Monsters, level objects and the pack are all the same kind of doubly linked list"
    link: "https://en.wikipedia.org/wiki/Doubly_linked_list"
    link_label: "Doubly linked list"
  - point: "Items are allocated with calloc and freed with free, one at a time"
    link: "https://en.wikipedia.org/wiki/C_dynamic_memory_allocation"
    link_label: "C dynamic memory allocation"

enhancements:
  - id: "detach-and-attach"
    line_start: 21
    line_end: 59
    title: "Taking Out and Putting In"
    wikipedia_url: "https://en.wikipedia.org/wiki/Doubly_linked_list"
    image_url: ""
    image_caption: ""
    content: "_detach takes an item out of whichever list holds it. If the item is the head, the list pointer moves on; the neighbour before it is pointed past it, the one after is pointed back, and the item's own links are cleared. _attach puts an item on the front of a list: the old first item is pointed back at the new one, and the new item's links are set. In rogue.h, the macros detach and attach wrap these names, using the list pointer by address. Insertion at the head is cheap, and removal needs no search since each item knows its neighbours."
  - id: "new-and-free"
    line_start: 61
    line_end: 113
    title: "Creating and Destroying"
    wikipedia_url: "https://en.wikipedia.org/wiki/C_dynamic_memory_allocation"
    image_url: ""
    image_caption: ""
    content: "_free_list throws away a whole list, taking one item off the head at a time and discarding it. discard frees one item, and in wizard builds keeps a count named total of how many are in use. new_item makes one with calloc, which zeroes the memory, and clears its links. A wizard build says 'ran out of memory after' that many items if calloc fails; a normal build does not check, so the next line would crash. Every monster, object and pack item is one THING of the same size, a union big enough for either."
---

```c
/*
 * Functions for dealing with linked lists of goodies
 *
 * @(#)list.c	4.12 (Berkeley) 02/05/99
 *
 * Rogue: Exploring the Dungeons of Doom
 * Copyright (C) 1980-1983, 1985, 1999 Michael Toy, Ken Arnold and Glenn Wichman
 * All rights reserved.
 *
 * See the file LICENSE.TXT for full copyright and licensing information.
 */

#include <stdlib.h>
#include <curses.h>
#include "rogue.h"

#ifdef MASTER
int total = 0;			/* total dynamic memory bytes */
#endif

/*
 * detach:
 *	takes an item out of whatever linked list it might be in
 */

void
_detach(THING **list, THING *item)
{
    if (*list == item)
	*list = next(item);
    if (prev(item) != NULL)
	item->l_prev->l_next = next(item);
    if (next(item) != NULL)
	item->l_next->l_prev = prev(item);
    item->l_next = NULL;
    item->l_prev = NULL;
}

/*
 * _attach:
 *	add an item to the head of a list
 */

void
_attach(THING **list, THING *item)
{
    if (*list != NULL)
    {
	item->l_next = *list;
	(*list)->l_prev = item;
	item->l_prev = NULL;
    }
    else
    {
	item->l_next = NULL;
	item->l_prev = NULL;
    }
    *list = item;
}

/*
 * _free_list:
 *	Throw the whole blamed thing away
 */

void
_free_list(THING **ptr)
{
    THING *item;

    while (*ptr != NULL)
    {
	item = *ptr;
	*ptr = next(item);
	discard(item);
    }
}

/*
 * discard:
 *	Free up an item
 */

void
discard(THING *item)
{
#ifdef MASTER
    total--;
#endif
    free((char *) item);
}

/*
 * new_item
 *	Get a new item with a specified size
 */
THING *
new_item()
{
    THING *item;

#ifdef MASTER
    if ((item = calloc(1, sizeof *item)) == NULL)
	msg("ran out of memory after %d items", total);
    else
	total++;
#else
    item = calloc(1, sizeof *item);
#endif
    item->l_next = NULL;
    item->l_prev = NULL;
    return item;
}
```
