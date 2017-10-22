importScripts('workbox-sw.prod.v1.1.0.js');

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
    "revision": "750e9443247f17214d0bfc0d3724d40f"
  },
  {
    "url": "build/app.registry.json",
    "revision": "d0abb047a06f9d7f318acde31e02b3d6"
  },
  {
    "url": "build/app\\app.gpsuqcrkyawe.js",
    "revision": "cd2407a4c217a39ce8d4fdbab37c7dbc"
  },
  {
    "url": "build/app\\app.zl1d3inmkul0.ce.js",
    "revision": "72d5a85bff70ea45217700cccb6d047f"
  },
  {
    "url": "build/app\\padrxhw0pyzi.css",
    "revision": "65fa8195f302a74bd278dc02a8d1265a"
  },
  {
    "url": "build/app\\vwkinzca79mx.js",
    "revision": "2fa0ddf325edbd63723e64fbad3cd059"
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
    "revision": "270dab4588741e3f0a88957f919b1ef0"
  },
  {
    "url": "manifest.json",
    "revision": "98daed2989db03c1e3ab4e35311c80af"
  }
];

const workboxSW = new self.WorkboxSW();
workboxSW.precache(fileManifest);
