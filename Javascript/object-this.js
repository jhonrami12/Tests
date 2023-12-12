(() => {
  //? When used alone, this refers to the global object.
  //? Because this is running in the global scope
  const globalThis = this;
  console.log("globalThis", globalThis);

  function thisInFunction() {
    const functionThis = this;
    console.log("functionThis", functionThis);
  }

  //? As you can see, when you use object this in a function,
  //? this refers to the global object too
  thisInFunction();

  function Person() {
    this.name = "Gabriel";
    this.lastName = "Herrera Zarate";
    //? in this case, the function works like a class, and this refers to the object person
    console.log("class Person", this);
  }

  const person = new Person();
  console.log("person", person);

  const thisInArrowFunction = {
    name: "Gabriel",
    fullname: () => {
      const thisArrow = this;
      //? As you can see, when you use object this in a an arrow function,this refers to the global object, not the object thisInArrowFunction
      console.log("thisArrow", thisArrow);
    },
  };

  thisInArrowFunction.fullname();

  const objectTest = {
    name: "Gabriel",
    lastName: () => {
      console.log("hola lastName" + this.name);
    },
    secondLastName() {
      console.log("hola secondLastName " + this.name);
    },
    thirdName: function () {
      console.log("hola thirdName " + this.name);
    },
  };

  objectTest.lastName();
  objectTest.secondLastName();
  objectTest.thirdName();

  const myObject = {
    myArrowFunction: null,
    myMethod: function () {
      console.log("this", this);
      this.myArrowFunction = () => {
        console.log(this);
      };
    },
  };
  //? in this example, this refers to the object myObject
  myObject.myMethod();
  myObject.myArrowFunction();
})();
