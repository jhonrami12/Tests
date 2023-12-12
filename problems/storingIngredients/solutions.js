//const _ = require('lodash');
// var Mocha = require('mocha')
// var assert = require('assert')
// var mocha = new Mocha()

// mocha.suite.emit('pre-require', this, 'solution', mocha)

let storage = {
  bread: { count: 0, max: 0 },
  ham: { count: 0, max: 0 },
  cheese: { count: 0, max: 0 },
};

const canMadeBurger = (ingredients) => {
  storage[ingredients].count++;
  if (
    storage["bread"].count > 0 &&
    storage["ham"].count > 0 &&
    storage["cheese"].count > 0
  ) {
    return true;
  }

  return false;
};

const storageCapacity = (logIngredists) => {
  logIngredists.split(",").forEach((ingredients) => {
    //validate if we can made a burger
    if (!canMadeBurger(ingredients)) {
      storage[ingredients].max = Math.max(
        storage[ingredients].max,
        storage[ingredients].count
      );
    } else {
      storage["bread"].count--;
      storage["ham"].count--;
      storage["cheese"].count--;
    }
  });

  return `${storage.bread.max},${storage.cheese.max},${storage.ham.max}`;
};

// describe('Test suite', function () {

let testCases = [
  {
    args: "bread,bread,bread,ham,cheese,ham,ham,cheese",
    expected: "3,0,2",
  },
];

testCases.forEach((logIngreds) => {
  // it(`Test case with ${logIngreds.args}`, function () {

  console.log(`Test case with ${logIngreds.args}`);
  let result = storageCapacity(logIngreds.args);
  console.log("     result:", result, "expected", result === logIngreds.expected);
  //assert.equal(result,logIngreds.expected);
});
//   })
// })

// mocha.run()
