(async () => {
  const asyncAwait = (number) => {
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

  //? To control error it is neccesary to use a try catch block
  try {
    //? with the parameter await we can control the asynchronous method  and assign it to a variable
    const response = await asyncAwait(randomNumber);
    console.log("It is a number less than 500", response);
    /*
    const response = asyncAwait(randomNumber);
    response.then((val) => console.log('entro al true:'+val),
      (val) => console.log('entro al reject:'+val)
    );    
    */
  } catch (error) {
    //? in the catch block, we can handle errors
    console.error("It is a number greater than 500", error);
  }
})();
