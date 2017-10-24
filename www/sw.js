importScripts('workbox-sw.prod.v2.1.0.js');

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
    "revision": "3249ca63bf41c2cdff58b903c61e2a51"
  },
  {
    "url": "build/app/app.eeqknnj9.pf.js",
    "revision": "b9b89d3245ee367a3779cdf67d03e021"
  },
  {
    "url": "build/app/app.enzuudpw.js",
    "revision": "656f04fbc423867fefbc4bd93ede9635"
  },
  {
    "url": "build/app/app.registry.json",
    "revision": "a4bb1ae5ba1ea6cd42dd4e3e024093c8"
  },
  {
    "url": "build/app/eozuhi0f.js",
    "revision": "bd8b2f532f8497494983d105c7f60edf"
  },
  {
    "url": "build/app/fnza8xfs.js",
    "revision": "5f6a242a14f627b66700d6402fab68f2"
  },
  {
    "url": "build/app/skufofuo.js",
    "revision": "a8361744dfe9f7018d7383a42ce979b8"
  },
  {
    "url": "build/app/skufofuo.sc.js",
    "revision": "36520b746608f95efabe6d1eeb120a5d"
  },
  {
    "url": "favicon.ico",
    "revision": "d2f619d796fbe8bed6200da2691aa5b6"
  },
  {
    "url": "images/icon.png",
    "revision": "75c888e597da5109c2e11695db21871a"
  },
  {
    "url": "index.html",
    "revision": "441e13436df9df0c83ecf45897e60ef1"
  },
  {
    "url": "manifest.json",
    "revision": "46c1c1afb561781fa5d5a6bbb3b8a197"
  },
  {
    "url": "workbox-sw.prod.v1.1.0.js",
    "revision": "df86dfc69c6d017722ecb8a16d34c849"
  }
];

const workboxSW = new self.WorkboxSW({
  "skipWaiting": true,
  "clientsClaim": true
});
workboxSW.precache(fileManifest);
