(() => {
  //* Object destructuring
  const testObject = {
    name: "Gabriel",
    lastName: "Herrera Zarate",
    age: 30,
    email: "gaboghz654@gmail.com",
    address: {
      street: "street 1 2 3 4",
      apartment: 2,
    },
  };

  //? destructuring to get separates variables

  const { name, lastName, age, email } = testObject;

  console.log("Hey:", name);
  console.log("Hey:", lastName);
  console.log("Hey:", age);
  console.log("Hey:", email);

  //? destructuring to get separates variables with other names
  const {
    name: newName,
    lastName: newLastName,
    age: newAge,
    email: newEmail,
    ...restParameters //? We can use the operator rest to assign the rest of parameters (...)
  } = testObject;

  console.log("Hey:", newName);
  console.log("Hey:", newLastName);
  console.log("Hey:", newAge);
  console.log("Hey:", newEmail);
  console.log("Hey:", restParameters);

  //? destructuring to get nested variables
  const {
    address: { street, apartment },
  } = testObject;
  console.log("Hey:", street);
  console.log("Hey:", apartment);

  //* Array destructuring

  const arrayExample = ["Cars", 2, "video games", true, 1, 2, 4, 5];

  const [
    cars,
    numbersExample,
    videoGames,
    booleanExample,
    ...restArray //? We can use the operator rest to assign the rest of the array (...)
  ] = arrayExample;

  console.log("Hey:", cars);
  console.log("Hey:", numbersExample);
  console.log("Hey:", videoGames);
  console.log("Hey:", booleanExample);
  console.log("Hey:", restArray);

  //? In this example, we just want the value of position 0 and 2, the rest of them we can ignore
  const [cars2, , numbersExample2] = arrayExample;

  console.log("Hey:", cars2);
  console.log("Hey:", numbersExample2);
})();
