(() => {
  const arrayExample = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  Math.max.apply;

  //? with break statement we can stop the iteration
  const breakExample = () => {
    for (const a of arrayExample) {
      console.log("breakExample: ", a);
      if (a === 5) {
        break;
      }
    }
  };

  //? with continue statement we can stop the current iteration and continue with the next
  const continueExample = () => {
    for (const a of arrayExample) {
      console.log("continueExample: ", a);
      if (a === 5) {
        continue;
      }
      console.log("continue after: ", a);
    }
  };

  breakExample();
  continueExample();
})();
