let enter = parseInt(prompt("enter the max number"));
// parseInt -> it work like this if you enter number it will return it but if you put anything else it will return NaN
// var num1 = parseInt("123");  // base 10 (default)
// var num4 = parseInt("hello");  // returns NaN
// var num5 = parseInt("123.45"); // returns NaN

while (!enter) {
  enter = parseInt(prompt("enter the max number"));
}
// look for that NaN doesn't equal NaN that mean when the user enter a string that will have NaN value
// and when NaN coming for this while NaN ===NaN //fales and it will in this loop to give enter value

const calc = Math.floor(Math.random() * enter) + 1;
console.log(calc);
let attemps = 0;
let Guess = parseInt(prompt("how much do you think I am"));
// i put Guess in parseInt  becuase if the user put something that not a number will out
while (parseInt(Guess) != calc) {
  if (Guess === "q") break;
  if (Guess === calc) {
    console.log("you are right you win");
    break;
  } else if (Guess > calc) {
    Guess = prompt("I am under");
  } else if (Guess < calc) {
    Guess = prompt("I am up");
  }
  attemps++;
}
if (Guess === "q") {
  console.log("you quit");
} else {
  console.log(`you win, it took you ${attemps} time`);
}
