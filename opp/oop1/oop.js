// =======================================prototype=======================================
// its so hard to explane it here pls watch vedio
// you see all prototype the elemenet like Array.prototype and you will see the type of prototype
// [[Prototype]]: Object

// and you can add your methode like Array.prototype.theNameMethodeYouWantAdd = ()=> what you want
// __proto__:Array(...) what is ?? it is prototype refrence like  name._proto_ it will refer on the name

// ===========================================oop========================

// i have function that function convart rgb color to hex color
// donot wary , you don't have to learn how convart equation
function hex(r, g, b) {
  return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}

// hex(13,233,54) // '#0de936'

// and i want add function that print rgb
function rgb(r, g, b) {
  return `rgb(${r},${g},${b})`;
}

// but if i want to make one function have tow thing

function makeColor(r, g, b) {
  const color = {}; //empty object
  color.r = r;
  color.g = g;
  color.b = b;
  color.rgb = function () {
    const { r, g, b } = this;
    // it will return r=r g=g b=b becauce it will go for the value in above sentence and the resuon it don't know you need value this functio
    // and you can write this return `rgb(${this.r},${this.g},${this.b})`; but I prefer to write it like this const { r, g, b } = this;
    return `rgb(${r},${g},${b})`;
  };
  color.hex = function () {
    const { r, g, b } = this;
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
  };
  return color;
}
// color.hex() === color.hex(); //false //why?? //because they not in the same prototype

// but that in makeColor function no one use it like this because of that we will move to
// ====================================Constructor Functions===============================================
// you make one function that have accesse to all constans
// like this
function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
  // it cive us undefined
  // but let's see what it is refeur to
  console.log(this);
  //   it refear to window // because this if remmeber it refear global scope, and it should refear to the object is contain the
  // ........becuase of that it refear on window -but- if we use new its like magic this will refear on the Car object
}

// and it not return any value

// but if you use new , and new its links this object to another object , and the magic will happen
new Car("tesla", 1, 2010); //write it in console
// ....and look inside prototype there is constructor that mean --it define inside prototype--
// i will say it again it define inside prototype

let car2 = Car("kia", 2004, 4334);
console.log(window.make, model, year);
// look at it I pring it from window when I didn't use new

// i will rewrite color function
function color(r, g, b) {
  this.r = r;
  this.g = g;
  this.b = b;
}
// i want use new to ruturn string rgb but don't forget prototype - that mean need access inside prototype
color.prototype.rgb = function () {
  const { r, g, b } = this;
  return `rgb(${r},${g},${b})`;
};
color.prototype.hex = function () {
  const { r, g, b } = this;
  return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
};

const color1 = new color("red", "black", "blue");
const color2 = new color(233, 44, 231);
color2.hex();
color1.hex() === color2.hex(); //true because they in the same prototype

// if you open prototype method you will find rgb inside it

// ===========================================================js class==============================
class ColorClass {
  // and we always add in a constructor and it will work automaticly
  constructor(r, g, b, name) {
    // it will exucte immedietly whenever a now color is created

    // console.log("INSIDE CONSTRUCTOR");
    // console.log(r, g, b);
    // but we don't write this , we write proprity and automaticly refearing to a new object
    this.r = r;
    this.g = g;
    this.b = b;
    this.name = name;
  }
  //    and I want make object that call name
  greet() {
    return `hello from ${this.name}!`;
  }
  //    if you notes but I don't think , you do write ColorClass.prototype.greet(){.....} , every thing automaticly
}
const c1 = new ColorClass(23, 233, 112);
c1.greet(); //write it in console

// and (this) refer to the individual object when we use new
// if you want call methode inside methode   this.namemethode()

// ---------------------------------------------------------- Extends and Super Keywords ----------------------
// class Cat {
//   constructor(name, age, soul) {
//     this.name = name;
//     this.age = age;
//     this.soul = soul;
//   }
//   eat() {
//     return `${this.name} eating a can`;
//   }
//   souls() {
//     return `the cat have ${this.soul}souls`;
//   }
// }

// class buird {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   eat() {
//     return `${this.name} eating a can`;
//   }
// }
// but if you want make extand you can't to make extend you should have perent and childe but it not contain them

class pet {
  constructor(name, age, soul) {
    this.name = name;
    this.age = age;
    this.soul = soul;
  }
  eat() {
    return `${this.name} eating a can`;
  }
}
class Cat extends pet {
  souls() {
    return `the cat have ${this.soul}souls`;
  }
}

class buird extends pet {} //it use the pet and you can access to soul

//                    super wach vedio but it to access to value in another class
