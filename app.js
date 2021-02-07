if ("serviceWorker" in navigator) {
  window.addEventListener("load", function() {
    navigator.serviceWorker.register("/sw.js").then(function(registration) {
      // Registration Successful
      console.log("ServiceWorker Registered, Scope: ", registration.scope);
    }, function(err) {
      // Registration Failed
      console.log("ServiceWorker Not Registered: ", err);
    });
  });
}