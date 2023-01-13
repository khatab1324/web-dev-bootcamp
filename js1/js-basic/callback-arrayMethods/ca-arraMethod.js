// ---------------------------------------the forEach Method -------------------------------------
const array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
array1.forEach(function (element) {
  console.log(element);
});
// its like for(let element of array1){console.log(element);}
//and you can use it with object

// -----------------------------------------------map--------------------------------

// creates a new array with the results of calling a callback on every element in the array
// let color = ["yellow", "red", "black", "white"];
// const COLOR = color.toUpperCase();
//         this is wrong color.toUpperCase() is not define

let color = ["yellow", "red", "black", "white"];
const COLOR = color.map(function (upperCase) {
  return upperCase.toUpperCase();
});

// let try with object
let shows = [
  {
    title: "Breaking Bad",
    episodes: 62,
  },
  {
    title: "Game of Thrones",
    episodes: 73,
  },
  {
    title: "The Sopranos",
    episodes: 86,
  },
  {
    title: "The Wire",
    episodes: 60,
  },
];

// i want print just the tittles
const titleOfMovie = shows.map(function (title2) {
  return title2.title.toLocaleUpperCase(); //you shuold put title2
});
console.log(titleOfMovie);

//-------------------------------------------------Arrow functions -------------------------
// its ecactly same function work
const add = (x, y) => {
  return x + y;
};

// --------------------------------Array function implicit return--------------------
// // like
// let rolldie = () => {
//   Math.floor(Math.random() * 10) + 1;}; // undefine

// but if I but () insted {} that mean I tell him return one value but vs code remove the () becuase it the same thing
let rolldie = () => Math.floor(Math.random() * 10) + 1; // it work
// and remember just one thing if you have something else you will git error
// let rolldie = () =>
// let hello = 'assafa';
// Math.floor(Math.random() * 10) + 1; // error

// with object you can do this alsoet color = ["yellow", "red", "black", "white"];
// const COLOR = color.map( upperCase => return upperCase);

//
// ------------------------------------------setTimeout----------------------------------
// its run your function after while of time and this time in ms
setTimeout(() => {
  console.log("seeeeeeeeeeeeeeeeeeeeeeeee");
}, 2000);

// if you want repet some thing every period of time use interval
const id = setInterval(() => {
  console.log(`seeeeeeeeeeeeeeeeeeeeeeee agine`);
}, 0.000001);

// if I write clearInterval(id) it wil

// ------------------------------------------------------------------filter-----------------------
// it check form the elemet is true to give it access to inter
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const odds = numbers.filter((n) => {
  return n % 2 === 1;
});
// look it check from the return

// and it work on object
let alotEpisodes = shows.filter((episod) => episod.episodes > 70);

// ------------------------------------------every -----------------------------------
// test all element in array pass the provided function it return a boolean value
let users = [
  { name: "Mark", age: 25 },
  { name: "Stacey", age: 32 },
  { name: "Carrie", age: 18 },
  { name: "Moana", age: 45 },
];
let allUsersOver21 = users.every((user) => user.age > 21);
let words = users.every((check) => check.name.length < 10);

console.log(allUsersOver21); // false
console.log(words);

// --------------------------------------------some------------------------------------------------------
// similar to every , but returns true if any of the array elements pass the test function
let anyUsersOver30 = users.some((user) => user.age > 30);
console.log(anyUsersOver30); // true

// ---------------------------------------------------reduse-------------------------------------
// execute a reduser function on each element of the array,resulting in a single value
// watch the vedio

// --------------------------------------------NOTE: about this and arrow------------------------------
const me = {
  firstName: "khattab",
  lastName: "fayyad",
  fullname: () => {
    return `${this.firstName} ${this.lastName}`;
  },
};

// if write me.fullname() //'undefined undefined'. why its not working with arrow
