//? complex function
const fib = (n) => {
  if (n < 2) {
    return n;
  }

  return fib(n - 1) + fib(n - 2);
};

//? OnMessage method created as an eventListener in the external js file, we a worker makes a postMessage, we can see the input on this method,
//? and then to response, we use a self.postMessage again
const onMessage = (event) => {
  console.log(event);
  const { index } = event.data;
  const fibonacciNumber = fib(index);

  self.postMessage({ index, fibonacciNumber });
};

self.addEventListener("message", onMessage);
