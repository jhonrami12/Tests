(() => {
  //*var
  console.log(variableVar); //? return undefined
  var variableVar = "Hello world";
  const varTest = () => {
    //?Var has function scope
    console.log("variableVar", variableVar); //* Return "Hello world";
  };

  varTest();

  //*Let
  //?console.log(variableLet);
  //!This is an error, because we are trying to call it since temporaly death zone,
  //! You can not access before initialization
  let variableLet = "Hello world i am let";

  const letTest = () => {
    //? 1. comment console.log(variableLet);
    //? 2. run letTest
    //console.log("variableLet", variableLet);
    //! You cant not access before initialization, because let variable just have block scope,
    //!that means that variableLet was not declare in letTest() funtion

    //? 1. comment console.log("variableLet", variableLet);
    let variableLet2 = "Hello world since letTest() functions";
    console.log("variableLet2", variableLet2);
    //* This works fine, because let variable was declared and initializated before we try to access

    //?  Let and Const work at the same way, the only difference is that const variable can not change its value.
  };

  letTest();
})();

//?console.log("hey!!", variableVar);
//! Error , because variableVar does not exist in this scope
