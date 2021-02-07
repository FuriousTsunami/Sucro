// Register ServiceWorker
if("serviceWorker" in navigator) {
  let registration;

  const registerServiceWorker = async () => {
    registration = await          navigator.serviceWorker.register("sw.js");
  };

  registerServiceWorker();
}