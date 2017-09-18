export  function renderFullPage(html, preloadedState, head) {

  return ` <!DOCTYPE html>
  <html lang="en">

    <head>
      ${head.title.toString()}
      ${head.meta.toString()}
      ${head.script.toString()}
      <script type="application/ld+json">
        {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "Wooplr",
            "url": "https://wooplr.com" 
        }
    </script>
     
  
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      <link rel='stylesheet' media='screen and (min-width: 761px)' href='/css/venueListing/venueListing.desktop.css'  />
      <link rel='stylesheet' media='screen and (max-width: 760px)' href='/css/venueListing/venueListing.mobile.css'  />
      <link href="https://fonts.googleapis.com/css?family=Lato:300,300i,400,400i,700" rel="stylesheet" />



      <link rel="manifest" href="/js/venueListing/manifest.json" />
      <meta name="mobile-web-app-capable" content="yes" />
      <link rel="icon" sizes="192x192" href="https://d2hfzg3ugxeze1.cloudfront.net/favicon/android-icon-192x192.png" />
      <meta name="theme-color" content="#558B2F" />




      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="#558B2F" />
      <meta name="apple-mobile-web-app-title" content="Playo" />
      <link rel="apple-touch-icon" href="https://d2hfzg3ugxeze1.cloudfront.net/favicon/android-icon-144x144.png" />
      <meta name="msapplication-navbutton-color" content="#558B2F" />
      <meta name="msapplication-TileImage" content="https://d2hfzg3ugxeze1.cloudfront.net/favicon/android-icon-192x192.png" />
      <meta name="msapplication-TileColor" content="#558B2F" />
    </head>
    <body>
    
    
      <div id="app">${html}</div>

      <script>
        window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
      </script>


     
     
     
      <script type="text/javascript" src="/asset/vendor.js" ></script>
     
      <script>
        if('serviceWorker' in navigator){
          navigator.serviceWorker.register('/sw.js')
          .then( function(){
            console.log("Successfully registered");

          })
          .catch(function(){
            console.log("failed");

          });

        }
     </script> 



    </body>
  </html>
  `
}
