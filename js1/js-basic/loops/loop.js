for (let i = 0; i < 10; i++) {
  console.log(i);
}
// and you can altarnative i++ you can do i+=1 its the same thing
console.log("print even");
// for loop print even number
for (let i = 0; i <= 20; i += 2) {
  console.log(i);
}
console.log("Descending");
for (let i = 100; i >= 0; i -= 10) {
  console.log(i);
}
console.log("looping array");
// to looping array
const names = ["kahtab", "mostafa", "ahmad", "smeir"];
for (let i = 5; i >= 0; i -= 1) {
  console.log(names);
}
console.log("every name alon");
// to loop every name in the array
for (let i = 0; i < names.length; i += 1) {
  console.log(i + 1, names[i]);
}

// to revers names array
console.log("revers name");
for (let i = names.length - 1; i >= 0; i -= 1) {
  console.log(i + 1, names[i]);
}
const people = ["Scooby", "Velma", "Daphne", "Shaggy", "Fred"]; //DONT TOUCH THIS LINE!

// WRITE YOUR LOOP BELOW THIS LINE:
for (let i = 0; i <= people.length; i++) {
  console.log(people[i]);
}

// for loop inside for loop
for (let i = 0; i <= 2; i++) {
  console.log(`i is ${i}`);
  for (let j = 0; j < 2; j += 1) {
    console.log(`j is ${j} omg`);
  }
}
//
console.log("odrder the class");
const grade = [
  ["apple", "banana", "orange", "grape"],
  ["dog", "cat", "bird", "fish"],
  ["red", "blue", "green", "yellow"],
];

for (let i = 0; i <= 2; i++) {
  // to print the row
  let row = grade[i];

  if (i === 0) {
    console.log(
      "------------------------frute------------------------------------------"
    );
  }
  if (i === 1) {
    console.log(
      "------------------------animal------------------------------------------"
    );
  }
  if (i === 2) {
    console.log(
      "------------------------color------------------------------------------"
    );
  }
  //   to print elememt
  for (let j = 0; j <= 3; j++) {
    let element = grade[i][j];
    console.log(element);
  }
}

//
//
// ----------------------------------------------while-------------------------------------
console.log("");
console.log("");
console.log("");
console.log("");
console.log(
  "-----------------------------------while loop-------------------------------------"
);
//
//
//

let x = 1;

while (x <= 5) {
  console.log(x);
  x++;
}

// the brake inside while
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let target = 7;

let i = 0;
while (i < numbers.length) {
  if (numbers[i] == target) {
    console.log(`Found ${target} at index ${i}!`);
    break;
  }
  i++;
}
