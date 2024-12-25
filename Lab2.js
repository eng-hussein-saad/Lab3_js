function sort(words) {
  if (!words) {
    return "";
  }
  words = words.split(" ");
  words = words.sort(function (a, b) {
    var num1 = a.match(/\d/);
    var num2 = b.match(/\d/);
    return num1 - num2;
  });
  wordsArray = words.join(" ");
  return wordsArray;
}
console.log(sort("is2 Thi1s T4est 3a"));
console.log(sort("4of Fo1r pe6ople g3ood th5e the2"));
