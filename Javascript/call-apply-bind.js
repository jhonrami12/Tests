(() => {
  const user = {
    name: "Gabriel",
    lastName: "Herrera Zarate",
  };

  const userTwo = {
    name: "Natalia",
    lastName: "Alvarez Suarez",
  };

  function getName(edad, gender) {
    return `${this.name}  ${this.lastName}  is ${edad} years old and  he is a ${gender}`;
  }

  //*Call
  console.log(getName.call(user, 30, "Male"));
  console.log(getName.call(userTwo, 27, "Female"));

  //*Apply
  console.log(getName.apply(user, [30, "Male"]));
  console.log(getName.apply(userTwo, [30, "Female"]));

  //*Bind
  const newFunction = getName.bind(user);
  console.log(newFunction(30, "Male"));

  var global = "Global";
  let pedo = 1;

  function localFunction() {
    console.log("pedo", global);
    return global;
  }

  localFunction();
})();
