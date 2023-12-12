(() => {
  const numberNumber = 1;
  const numberString = "1";
  const nullVariable = null;
  const undefinedVariable = undefined;
  const variableCero = 0;
  const variableTrue = true;
  const variableFalse = false;
  const arrayOne = [];
  const arrayTwo = [];

  //? what return this?
  //? 1. Return 2
  //? 2. Return 11
  //* Answer: 11
  console.log(
    `${numberNumber} + '${numberString}':`,
    numberNumber + numberString
  );

  //? what return this?
  //? 1. Return true
  //? 2. Return false
  //* Answer: true
  console.log(
    `${numberNumber} == '${numberString}':`,
    numberNumber == numberString
  );

  //? what return this?
  //? 1. Return true
  //? 2. Return false
  //* Answer: false
  console.log(
    `${numberNumber} === '${numberString}':`,
    numberNumber === numberString
  );

  //? what return this?
  //? 1. Return true
  //? 2. Return false
  //* Answer: true
  console.log(
    `${nullVariable} == ${undefinedVariable}:`,
    nullVariable == undefinedVariable
  );

  //? what return this?
  //? 1. Return true
  //? 2. Return false
  //* Answer: false
  console.log(
    `${nullVariable} === ${undefinedVariable}:`,
    nullVariable === undefinedVariable
  );

  //? what return this?
  //? 1. Return true
  //? 2. Return false
  //* Answer: true
  console.log(
    `${variableTrue} == ${numberNumber}:`,
    variableTrue == numberNumber
  );

  //? what return this?
  //? 1. Return true
  //? 2. Return false
  //* Answer: false
  console.log(
    `${variableTrue} === ${numberNumber}:`,
    variableTrue === numberNumber
  );

  //? what return this?
  //? 1. Return true
  //? 2. Return false
  //* Answer: true
  console.log(
    `${variableCero} == ${variableFalse}:`,
    variableCero == variableFalse
  );

  //? what return this?
  //? 1. Return true
  //? 2. Return false
  //* Answer: false
  console.log(
    `${variableCero} === ${variableFalse}:`,
    variableCero === variableFalse
  );

  //? what return this?
  //? 1. Return true
  //? 2. Return false
  //* Answer: false
  console.log(`[${arrayOne}] == [${arrayTwo}]:`, arrayOne == arrayTwo);

  //? what return this?
  //? 1. Return true
  //? 2. Return false
  //* Answer: false
  console.log(`[${arrayOne}] === [${arrayTwo}]:`, arrayOne === arrayTwo);
})();
