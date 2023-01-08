function sum() {
  console.log(`do you know one + one = ${2}`);
}

//  and to call it
sum();
// just the name and donot forget the ()

function play(firstName) {
  console.log(`the first name is ${firstName}`);
}

//if you write play('khattab') // the first name is khattab
// if you write play() //the first name is undefined

// to knew function play(firstName) firstName is parameter
// and the play('khattab') khattab is argument

// and you can enter two input inside parameter
function play2(firstName, secondName) {
  console.log(
    `here is two name first one is :${firstName} and the second one is : ${secondName}`
  );
}
play2("khattab", "abdalmalk");

//to repeat like this hihihihi
function repeat(str, numTimes) {
  let result = str;
  for (let i = 0; i < numTimes; i++) {
    result += str;
    // that men result every time in this loop will puls one str
  }
  console.log(result);
}

repeat("hi", 4);

// -----------------------------return---------------------------------
// function sum(x,y){
//     console.log(x+y);
// }
// this function will not return any value that mean if you put that add=sum(1+2); will not save it
// becuase of that we use return
function add(x, y) {
  let sum = x + y;
  return sum;
  console.log("unread code");
  //  return stop work the function that mean any thing you write it after return will not working
}
sum = add(2, 4);

// if you call sum it will equal 6
function multiply(x, y) {
  sum = x * y;
  return sum;
}
sum = multiply(2, 3);
console.log(sum);

// ----------------------------------------sum--------------------------------
function sumArray(numbers) {
  let total = 0;
  for (let i = 0; i < numbers.length; i++) {
    total += numbers[i];
  }
  return total;
}
console.log(sumArray([1, 2, 3]));
// NOTE: donot put i <= numbers.length becuase length =3 that mean i=3
// number[i]   number[0] -> 1 number[1] -> 2 number[2] -> 3 number[3] -> undefine
// number + undefine = NaN
