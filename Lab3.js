function specialMultiply(a, b) {
  if (arguments.length === 2) {
    return a * b;
  } else if (arguments.length === 1) {
    return function (b) {
      return a * b;
    };
  } else {
    console.log("error please enter 1");
  }
}
console.log(specialMultiply(2)(3));
