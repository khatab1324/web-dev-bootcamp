//---------------------------------------- scope----------------------
// it is the location where a variable is defined dictates where  we have access to that variable

// function old() {
//   let age = 18;
// }
// console.log(age); // age is not define
let age = 0;
function old() {
  age = 18;
}
// befor run the function
console.log(age);
// run function
old();
console.log(age);
// look for age its update
// this only the way to call something from function that you define age out function and you update the age in function
// ok , the conclusion , function own scope
//
// if the console.log(animal); inside the function the proierty for function
let animal = "Giant Pacific Octopus";
function observe() {
  let animal = "Pajama Squid";
  console.log(animal);
}
observe(); //Pajama Squid

// ------------------------------------------------block scope---------------------------
// like if or for .....
// // let i = 10;
// // if (i > 23) {
// //   let x = 12;
// // }
// console.log(x);

// but the var diffrent
for (var i = 3; i <= 8; i++) {
  var msg = "don't do it";
}
console.log(msg);
// wtf the var chang that rule ,var is don't have scope

// ---------------------------------------lexical scope ------------------------------
// if function inside function evry thing inside the out function is can arrave to the
// inher function and the oppsite wrong
function outer(x) {
  function middle(y) {
    inner(5);
    function inner(z) {
      console.log(x, y, z);
      // let innerI ='hi you doing'
    }
    // console.log(innerI) // innerI not define
  }
  middle(4);
}
outer(3);

// -------------------------------------Function Expressions------------------------------
// function add (x,y){
// return x + y;
// }

// you can do this insted
const add = function (x, y) {
  return x, y;
};
// nots the function don't have a name

// ---------------------------------higher order function ------------
// function as arguments
function callAFunction(func) {
  func();
  func();
}

function sayHello() {
  const roll = Math.floor(Math.random() * 6) + 1;
  console.log(roll);
}

callAFunction(sayHello);
// look i call the function sayHello without ()becuase it will call the function before arrave to it
//
// -------------------------------------------------return a function ------------------------------------------
function makeBetweenFunc(min, max) {
  return function (num) {
    return num >= min && num <= max;
  };
}
// if you write makeBetweenFunc() //
// (num) {
//   return num >= min && num <= max;}
//
// becuase that you should save it in value
const inChaild = function (num) {
  return num >= 0 && num <= 18;
};
const inAdult = function (num) {
  return num >= 19 && num <= 70;
};

// ---------------------------------------------------methods----------------------------
// we can add function as properties an objects we call them methods

const mymath = {
  multiply: function (x, y) {
    return x * y;
  }, // look to ,
  divide: function (x, y) {
    return x / y;
  },
  square: function (x) {
    return x * x;
  },
};
console.log(mymath.square(2));
console.log(mymath.divide(2, 5));

// or you can do this shortcut object

const mymath2 = {
  multiply(x, y) {
    return x * y;
  }, // look to ,
  divide(x, y) {
    return x / y;
  },
  square(x) {
    return x * x;
  },
};

// -----------------------------------------'this' in methods-----------------------
const khattab = {
  name: "khattab fayyad",
  old: "18",
  favorateColor: "red",
  // function
  hi() {
    console.log(`${this.name} says meowww`);
  },
};
khattab.hi();
// this to call element in the same propariety
// like i want call old just this.old
//
// take a brith , ok
// what if i khattab.hi(); in value and call the value i should have the same result
const hero = khattab.hi;
// if i wirte hero //ƒ hi() {
// console.log(`${this.name} says meowww`);
// }

//ok that mean this should work
hero();
// wtf were is khattab
// ok this it refer to khattab.hi() not hero()=........
// but it refer to window if you don't understand colt have vedio in youtupe explane that

// --------------------------------exrcise--------------------------
let hen = {
  name: "Helen",
  eggCount: 0,
  layAnEgg(str) {
    // to update not to define that mean you don't have to return the eggCount because you just want upadate it
    this.eggCount++;
    return "EGG";
  },
};

// -----------------------------------------try/catch---------------------------------
// its for prove the error from my code and still run
try {
  // the wrong I don't define the hello
  hello.toUppercase();
} catch {
  console.log("error!!!!!!!!!!!");
}
// or you can print the problem
try {
  // the wrong I don't define the hello by gining catch porm..
  hello.toUppercase();
} catch (e) {
  console.log(e);
  console.log("error!!!!!!!!!!!");
}
