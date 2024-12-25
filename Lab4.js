function guessingGame(amount) {
  var answer = Math.floor(Math.random() * 11);
  console.log(answer);
  var guesses = 0;
  return function (guess) {
    if (guess === answer) {
      return "You got it!";
    } else if (guess > answer) {
      guesses += 1;
      return "Your guess is too high!";
    } else {
      guesses += 1;
      return "Your guess is too low";
    }
  };
}
var game = guessingGame(5);
console.log(game(1));
console.log(game(2));
console.log(game(8));
console.log(game(5));
console.log(game(7));
var game2 = guessingGame(3);
console.log(game2(5)); 
console.log(game2(3)); 
console.log(game2(1)); 
