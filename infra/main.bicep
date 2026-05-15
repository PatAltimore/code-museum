targetScope = 'resourceGroup'

@minLength(1)
@maxLength(64)
@description('Name of the azd environment.')
param environmentName string

@minLength(1)
@description('Azure region for all resources.')
param location string = resourceGroup().location

var tags = { 'azd-env-name': environmentName }
var resourceToken = toLower(uniqueString(subscription().id, environmentName, location))

resource staticWebApp 'Microsoft.Web/staticSites@2022-03-01' = {
  name: 'swa-${resourceToken}'
  location: location
  tags: union(tags, { 'azd-service-name': 'web' })
  sku: {
    name: 'Free'
    tier: 'Free'
  }
  properties: {}
}

output AZURE_STATIC_WEB_APPS_URL string = 'https://${staticWebApp.properties.defaultHostname}'
