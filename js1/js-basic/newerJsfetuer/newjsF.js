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

// ---------------------------------------------spread----------------------------------
const numS = [13, 34, 23, 33, 24];
// if I write math.max(numS) //NaN becuase the js don't know what it can do
// and that come us to spread ...
// spread it like nateala on bread and you spread it
Math.max(...numS);

// you can compan two array by using spread
const namesF = ["khattab", "mostafa", "aya"];
const animalF = ["hopy", "soso"];

const allsoules = [...namesF, ...animalF];
allsoules.push("lolo");
// if you notes the allsoules is deffrint and you can push or do any thing
console.log(allsoules);
// and you can use it to do this
const spaling = [..."hello"];
console.log(spaling);

// and you can use spread with object it the same thing

// -----------------------------------------------------------rest------------------------------------------
// it look like spread but it's not!
// Available inside every function
// it's like an array-like object 1-has a length property 2-doesn't  have array methods like push /pop
// contain all the agruments passed to the function
// not availble inside of arrow function

// function numbers(){
//   console.log([numbers])
// } you can't do this you should save somthing in agrument and you can save it by ... and remember it is not spread
function numbers(...numb) {
  console.log(numb);
}

// ----------------------------------------------------------destraction array-------------------------------

const numberPlayer = [48, 23, 1, 234];
// you can do this
const higherscore = numberPlayer[0]; // but is so long
// insted you can do this
const [gold, silver, bronze] = numberPlayer; // if you write gold//48 ...........
// and you can use destraction with objects  it so simple just use {}
// if you want rename object just do this {cerrentName :newName}
