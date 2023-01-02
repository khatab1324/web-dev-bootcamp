let numbers = [34, 33, 90];
// to make array
// let variable = []
// we use the array to contane data
// if you write numbers.length // 3

let names = ["khatab", "roomy", "halomy"];
// if you want to call varaible call his number
// you should know the order like this name = [0,1,2,3,........]
// names[0]; // khatab

// and you can bick letter form array like this
// names[1][0] //"r"

// and you can chang a value in the array
names[1] = "noomy";
// but you can't chang single letter you need to change the value

// -------------------------------------- array methods-------------------------------------------
// there is alot of array methods in mdn

// 1-push -> add to end
let color = ["red", "white"];
color.push("blue");
// call the color you will see the three items

// 2-pop -> remove from end
let family = ["ramadan", "ahmad", "jenefra", "soso"];
family.pop();
// soso is removed

// 3-shift ->remove form start
family.shift();
// ramadan is removed
// if you want put ahmad in variable
let son = family.shift();

// 4- unshift -> to add for start
let vip = ["elon", "mark", "leonard"];
vip.unshift("khatta");

//
// 5- concat
// you have to array and want to compont them like this
const letters1 = ["a", "b", "c"];
const letters2 = ["d", "e", "f"];
const allLetters3 = letters1.concat(letters2);
// expected output: Array ["a", "b", "c", "d", "e", "f"]

// 6- includ -> you ask the array did it have this element
const pets = ["cat", "dog", "bat"];
console.log(pets.includes("cat"));
// expected output: true
console.log(pets.includes("at"));
// expected output: false

// 7-indexOf -> it is samller the indexOf in string

const beasts = ["ant", "bison", "camel", "duck", "bison"];

beasts.indexOf("bison");
// expected output: 1

// Start from index 2
beasts.indexOf("bison", 2);
// expected output: 4

beasts.indexOf("giraffe");
// expected output: -1

// 8- reverse -> it reverse the array
const array1 = ["one", "two", "three"];
const reversed = array1.reverse();
console.log("reversed:", reversed);
// expected output: "reversed:" Array ["three", "two", "one"]
// Careful: reverse is destructive -- it changes the original array.
console.log("array1:", array1);
// expected output: "array1:" Array ["three", "two", "one"]

// 9- slice -> to get a slice from the array
// slice (start , end)
console.log("slice ");
const animals = ["ant", "bison", "camel", "duck", "elephant"];

console.log(animals.slice(2));
// expected output: Array ["camel", "duck", "elephant"]

console.log(animals.slice(2, 4));
// expected output: Array ["camel", "duck"]

console.log(animals.slice(1, 5));
// expected output: Array ["bison", "camel", "duck", "elephant"]

console.log(animals.slice(-2));
// expected output: Array ["duck", "elephant"]
// the - sign mean start from the end
console.log(animals.slice(2, -1));
// expected output: Array ["camel", "duck"]

console.log(animals.slice());
// expected output: Array ["ant", "bison", "camel", "duck", "elephant"]

// 10-splice -> splice(start,delete ,add)
console.log("slice");
const months = ["Jan", "March", "April", "June"];
months.splice(1, 0, "Feb");
// Inserts at index 1
// splice (1 is start , 0 mean no item delete , add feb)
console.log(months);
// expected output: Array ["Jan", "Feb", "March", "April", "June"]

months.splice(4, 1, "May");
// Replaces 1 element at index 4
console.log(months);
// expected output: Array ["Jan", "Feb", "March", "April", "May"]
months.splice(2, 2);
console.log(months);

// 11-sort -> its is sorts an array but we won't talk abuot it because it use a functions

// -------------------------------------------- Reference Types & Equality Testing--------------------------------------------
// if you write ['hi','bye']===['hi','bye']  //false
// ok what about ['hi','bye']==['hi','bye']  //false
// ok what about []==[] //false
// why ? because js not deal with array like other value . it give the array spicul place in memory
// that mean when you compare with to array you are compare with two place .it like addres
// what if I put it like a value and equale each other that will be true
let arrayA = [1, 2, 3];
let arrayB = arrayA;
arrayA === arrayB; //true

// --------------------------------------------------------------- Arrays + Const------------------------------------
// do you remember when we say const can't be change ,but you can change the contant inside the array
// but you can't change the array refruns

// -------------------------------------------------------------array inside array----------------------
let board = [
  ["X", "O", "X"],
  ["O", "X", "O"],
  ["X", "O", "X"],
];
