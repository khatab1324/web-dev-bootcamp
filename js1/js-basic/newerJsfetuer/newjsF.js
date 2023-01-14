// ---------------------------------------------default params ---------------------------------
//                              the old way
function rollDie(num) {
  // if you pass nothing the result NaN becuase that we will do that
  if (num === undefined) {
    num = 6;
  }
  return Math.floor(Math.random() * num) + 1;
}
// but you you can do that new fetuer
function rollDie(num = 6) {
  return Math.floor(Math.random() * num) + 1;
}
// it same result

// ok , you want from the user to enter name or thier family name
function namePerson(person = "khatab", family) {
  console.log(`${[person]} ${family}`);
}

// namePerson('fayyad') // fayyad undefined why js cancel khattab ?
// becase js stuped if you want put name you should make it in the first

// function namePerson( family , person = "khatab") {
//   console.log(`${[person]} ${family}`);
// }
