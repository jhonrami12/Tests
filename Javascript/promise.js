(() => {
  const promiseExample = (number) => {
    return new Promise((resolve, reject) => {
      if (number < 500) {
        //? If everything is ok, you use resolve the promise satisfactorily
        resolve(true);
      } else {
        //? you use reject in a negative case, when something went wrong
        reject(false);
      }
    });
  };

  const randomNumber = Math.floor(Math.random() * 1000);
  console.log("randomNumber", randomNumber);
  promiseExample(randomNumber)
    .then((result) => {
      //? When you resolve a promise, you can get the value with the method then, you can use method then as you want, but don't forget retunr a value in the previous then
      console.log("It is a number less than 500", result);
    })
    .catch((error) => {
      //? when you reject a promise, the object promise take it as an error
      console.error("It is a number greater than 500", error);
    })
    .finally(() => {
      //? this method is executhd at the end of the promise
      console.log("Execution method at the end");
    });

  //? REMEMBER
  //? The promise has three states
  //? 1. Pending -> When you create a promise you get a pending state
  //? 2. Fulfilled -> When you call resolve callback, the state promise will be changed to fullfilled
  //? 3. Rejectec -> when you call reject callback, the state promise will be changed changed to rejected
})();
