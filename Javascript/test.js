(() => {
  //? Object THIS
  var name = "Natalia Alvarez";

  const objectTest = {
    name: "Gabriel",
    lastName: () => {
      console.log("hola lastName" + this.name);
    },
    secondLastName() {
      console.log("hola secondLastName " + this.name);
    },
  };

  objectTest.lastName();
  objectTest.secondLastName();

  const arrowTest = () => {
    const name = "Gabriel Herrera ";
    console.log(this);
  };

  function functionTest() {
    const name = "Gabriel Herrera Zarate";
    console.log(this);
  }

  arrowTest();
  functionTest();
})();
