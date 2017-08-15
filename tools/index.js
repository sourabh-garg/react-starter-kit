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
            "name": "Playo",
            "url": "https://playo.co" 
        }
    </script>
      <meta charset="utf-8" />
    <!-- Google Tag Manager -->
    <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','GTM-54NDM4N');</script>
    <!-- End Google Tag Manager -->
  
  
  
  
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
    <!-- Google Tag Manager (noscript) -->
      <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-54NDM4N"
      height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
      <!-- End Google Tag Manager (noscript) -->
      <div id="app">${html}</div>

      <script>
        window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
      </script>


      <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyB08yhjYnar-DszQl7ecFJ1sYmN_p3VkWo&libraries=places" ></script>
      <script type="text/javascript" src="/js/venueListing/vendor.js" ></script>
      <script type="text/javascript" src="/js/venueListing/venueListing.js" ></script>

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

<script>
  window.fbAsyncInit = function() {
    FB.init({
      appId      : '1517806818505951',
      xfbml      : true,
      version    : 'v2.9'
    });
    FB.AppEvents.logPageView();
  };

  (function(d, s, id){
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) {return;}
    js = d.createElement(s); js.id = id;
    js.src = "//connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk'));
</script>

<script>window.twttr = (function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0],
    t = window.twttr || {};
  if (d.getElementById(id)) return t;
  js = d.createElement(s);
  js.id = id;
  js.src = "https://platform.twitter.com/widgets.js";
  fjs.parentNode.insertBefore(js, fjs);

  t._e = [];
  t.ready = function(f) {
    t._e.push(f);
  };

  return t;
}(document, "script", "twitter-wjs"));</script>
    </body>
  </html>
  `
}
