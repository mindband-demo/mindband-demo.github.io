importScripts('/mindband-pwa/workbox.dev.678c6960.js')



workbox.precaching.precacheAndRoute([
  {
    "url": "/mindband-pwa/app.5db9ba57f41effa1424c.js",
    "revision": "2e207bda60e8d0371e082a35e590d6ad"
  },
  {
    "url": "/mindband-pwa/layouts_default.7f5ffc710801c6c3613a.js",
    "revision": "f14dfff4dad5b0b9fd8c70de4c33c9b3"
  },
  {
    "url": "/mindband-pwa/manifest.583641f09a9183d85a5a.js",
    "revision": "7e18ffaa7e889d681470c39d11c32efb"
  },
  {
    "url": "/mindband-pwa/pages_index.fe7a24ae89f781a305c9.js",
    "revision": "8b47e1638747311dd0648ecab8ce6657"
  },
  {
    "url": "/mindband-pwa/pages_users__id.3111de988d84f0ea040b.js",
    "revision": "951e5904d091383abd9629a56ed23808"
  },
  {
    "url": "/mindband-pwa/pages_users_index.a222c40286e9e92528a2.js",
    "revision": "fadc30b4765bab68cce4b75666dcc294"
  },
  {
    "url": "/mindband-pwa/vendor.bbbbf8a387d7796f0919.js",
    "revision": "0c243cb800285fc80f51e9916634179f"
  }
], {
  "cacheId": "mindband-connect-for-cassia",
  "directoryIndex": "/",
  "cleanUrls": false
})



workbox.clientsClaim()
workbox.skipWaiting()


workbox.routing.registerRoute(new RegExp('/mindband-pwa/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')





