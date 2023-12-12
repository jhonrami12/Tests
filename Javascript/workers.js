(() => {
  //? Javascript is a single thread language, that means just one line of code run at once
  //? but, sometime we need to run code in other thread, because some function is complex
  //? 1. first , we declare a new worker with an external js file
  const worker = new Worker("external-worker.js");

  //? 2. we created a function to use the worker's postMessage method, in this methods, we passed the parameters that we need
  const onStart = () => {
    worker.postMessage({ index: 3 });
  };

  //? 3. we created a second function and we added an eventListenner in the worker created before
  const onMessage = (event) => {
    console.log("worker response", event);
    const index = event.data;
  };

  worker.addEventListener("message", onMessage);

  onStart();
})();
