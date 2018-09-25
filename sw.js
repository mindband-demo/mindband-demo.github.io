importScripts('/mindband-pwa/workbox.dev.678c6960.js')



workbox.precaching.precacheAndRoute([
  {
    "url": "/mindband-pwa/app.b2b6d7a7853c485bf8bc.js",
    "revision": "5e20a17d8564b0ffd6ae123cbd2c00ed"
  },
  {
    "url": "/mindband-pwa/layouts/default.eb3dedf6c3b8c4c21f92.js",
    "revision": "c9d2ebdafa07495c30f332d27ec301f0"
  },
  {
    "url": "/mindband-pwa/manifest.153279751058eeb5ea2d.js",
    "revision": "87a527d0ee1d9eaabaf92ef6e6d2e1f9"
  },
  {
    "url": "/mindband-pwa/pages/index.e155389979e6acf681a0.js",
    "revision": "82ceadef62a69524a0fbed4908de29e6"
  },
  {
    "url": "/mindband-pwa/pages/users/_id.5d8335944cf16590a0d7.js",
    "revision": "d9364626a2821f0447ea5775df5a8792"
  },
  {
    "url": "/mindband-pwa/pages/users/index.aaba80e62abc86fb5181.js",
    "revision": "b1b17be84b45c12c9aab68fdfc04f582"
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





