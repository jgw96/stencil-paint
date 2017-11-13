importScripts('workbox-sw.prod.v2.1.1.js');

/**
 * DO NOT EDIT THE FILE MANIFEST ENTRY
 *
 * The method precache() does the following:
 * 1. Cache URLs in the manifest to a local cache.
 * 2. When a network request is made for any of these URLs the response
 *    will ALWAYS comes from the cache, NEVER the network.
 * 3. When the service worker changes ONLY assets with a revision change are
 *    updated, old cache entries are left as is.
 *
 * By changing the file manifest manually, your users may end up not receiving
 * new versions of files because the revision hasn't changed.
 *
 * Please use workbox-build or some other tool / approach to generate the file
 * manifest which accounts for changes to local files and update the revision
 * accordingly.
 */
const fileManifest = [
  {
    "url": "build/app.js",
    "revision": "2db3d3646663fe7ac003052fe6d39c68"
  },
  {
    "url": "build/app/app.e6vocpeo.js",
    "revision": "fbb5b3ee805c7922b3495f058ce264a7"
  },
  {
    "url": "build/app/app.ir6lbt87.js",
    "revision": "7b0b55d542c91465a782ecdebde94f38"
  },
  {
    "url": "build/app/app.registry.json",
    "revision": "1ebdde678bcd7b2cfdc08ba56a111a86"
  },
  {
    "url": "build/app/kofmvqu5.js",
    "revision": "1782844d1e6569e90cb93c580ba2a78f"
  },
  {
    "url": "build/app/kofmvqu5.sc.js",
    "revision": "a0a24905447787d499c1e7ecde392035"
  },
  {
    "url": "build/app/oahpgvcj.js",
    "revision": "6bb2f39944d9813f9143e73691edce07"
  },
  {
    "url": "build/app/oahpgvcj.sc.js",
    "revision": "304b24f5b9f27f112cf341fe9e4df4ab"
  },
  {
    "url": "favicon.ico",
    "revision": "d2f619d796fbe8bed6200da2691aa5b6"
  },
  {
    "url": "images/128.png",
    "revision": "ddde94676da12362aba1533189b8b36d"
  },
  {
    "url": "images/256.png",
    "revision": "8cfd82c1b4684d2d2f00f5525cb6f157"
  },
  {
    "url": "images/64.png",
    "revision": "f30823021ba0174950e1d68830f8765e"
  },
  {
    "url": "images/icon.png",
    "revision": "75c888e597da5109c2e11695db21871a"
  },
  {
    "url": "index.html",
    "revision": "11579fc04d32124f1551f7adee0931db"
  },
  {
    "url": "manifest.json",
    "revision": "a37bc59ebb457e8195cda080f68dab12"
  },
  {
    "url": "workbox-sw.prod.v1.1.0.js",
    "revision": "df86dfc69c6d017722ecb8a16d34c849"
  },
  {
    "url": "workbox-sw.prod.v2.1.0.js",
    "revision": "e5f207838d7fd9c81835d5705a73cfa2"
  }
];

const workboxSW = new self.WorkboxSW({
  "skipWaiting": true,
  "clientsClaim": true
});
workboxSW.precache(fileManifest);
