/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "api-console-b90c1d37.js",
    "revision": "9db64863806a56a0c524dc0f7bdb4dd0"
  },
  {
    "url": "index.html",
    "revision": "cc1427949213efa5fe8f11ffd26c2b0c"
  },
  {
    "url": "legacy/api-console-073d7357.js",
    "revision": "e9d8c0dfb07006f6e06157ba701c7523"
  },
  {
    "url": "polyfills/core-js.95bb72a2469a8129765e70e29aaa3d5c.js",
    "revision": "e8b7d6250bc45345206cd5b30b22575c"
  },
  {
    "url": "polyfills/custom-elements-es5-adapter.84b300ee818dce8b351c7cc7c100bcf7.js",
    "revision": "cff507bc95ad1d6bf1a415cc9c8852b0"
  },
  {
    "url": "polyfills/dynamic-import.991be47e17117abb5eb15f5254ad3869.js",
    "revision": "08b86a7f56c6f0d65265654299b16d74"
  },
  {
    "url": "polyfills/fetch.a1ad5fb96dc0cb61b9454244c9bd7fe6.js",
    "revision": "9f292b53ba5b57783d407eb5a61aba83"
  },
  {
    "url": "polyfills/regenerator-runtime.95dc763885f05111a2f88232a2d0cf2d.js",
    "revision": "2b97956e0416f86ebda5ed3d4a75a127"
  },
  {
    "url": "polyfills/systemjs.760c9a81f93e1ad7c34169a9c1865ae0.js",
    "revision": "b4464220ca21ea761dc607ae79caa8bf"
  },
  {
    "url": "polyfills/webcomponents.ee2261f464b51aff8cdc704a7781c613.js",
    "revision": "cad554a5cf7baf5a48f1ff5be3824b6f"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerNavigationRoute(workbox.precaching.getCacheKeyForURL("/index.html"));
