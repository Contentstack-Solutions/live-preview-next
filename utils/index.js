const Contentstack = require('contentstack')

import ContentstackLivePreview from '@contentstack/live-preview-utils'

const Stack = Contentstack.Stack({
    api_key: 'blt12dea323b4bde0d3',
    delivery_token: 'cs4e5579e653c9153dedce14cc',
    environment: 'published',
    region: Contentstack.Region.US,
    live_preview: {
      management_token: 'cse312077730a6e86a15991c9c',
      enable: true,
      clientUrlParams: {
        host: "api.contentstack.io",
      },
      stackDetails: {
        apiKey: 'blt12dea323b4bde0d3'
      }
    }

  })

  Stack.setHost('api.contentstack.io')
  // ContentstackLivePreview.init({
  //   enable: true,
  //   stackDetails: {
  //     apiKey: 'blte387f51d6639c60b'
  //   },
  //   stackSdk: Stack
  // })

  ContentstackLivePreview.init(Stack)

export default Stack
export const onEntryChange = ContentstackLivePreview.onEntryChange
