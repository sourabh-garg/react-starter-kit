(global => {
  'use strict';

  importScripts('./sw-toolbox.js');



  global.toolbox.router.default = global.toolbox.networkOnly;


  global.addEventListener('install',
  event => event.waitUntil(global.skipWaiting()));
  global.addEventListener('activate',
  event => event.waitUntil(global.clients.claim()));




  toolbox.router.get('/js/(.*)', global.toolbox.fastest, {
    cache: {
      name: 'jsFiles-cache-v1',
      maxAgeSeconds: 864000,
      maxEntries: 5
    }

  });

  toolbox.router.get('/css/(.*)', global.toolbox.fastest, {
    cache: {
      name: 'cssFiles-cache-v1',
      maxAgeSeconds: 864000,
      maxEntries: 5
    }

  });


  toolbox.router.get('/(.*)', global.toolbox.fastest, {
    cache: {
      name: 'googleapis-caches',
      maxEntries: 10,
      maxAgeSeconds: 864000
    },
    origin: /fonts\.googleapis\.com$/
  });


  toolbox.router.get('/(.*)', global.toolbox.fastest, {
    cache: {
      name: 'amazonaws-caches',
      maxEntries: 30,
      maxAgeSeconds: 864000
    },
    origin: /\.ap-south-1.amazonaws\.com$/
  });

  toolbox.router.get('/(.*)', global.toolbox.fastest, {
    cache: {
      name: 'cloudfront-caches',
      maxEntries: 50,
      maxAgeSeconds: 864000
    },
    origin: /d2hfzg3ugxeze1\.cloudfront\.net$/
  });

  // toolbox.router.get('/(.*)', global.toolbox.fastest, {
  //   cache: {
  //     name: 'cloudfront-caches-v1',
  //     maxEntries: 100,
  //     maxAgeSeconds: 864000
  //   },
  //   origin: /d3qokvektr0ozw.cloudfront\.net$/
  // });



})(self);
