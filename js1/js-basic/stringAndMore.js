// --------------------------------------------------string--------------------------------------------------------------
// when you define a variable like a concetent , it need to be in notation like
// let usrename ="khatab"; or username = 'Khatab Hero';
// if you want to quote something it normal "he said that 'you are so stupeid'"

// ------------------------------------- Indices & Length------------------
// if you define integer like username
// let username =khattab fayyad the first litter is k equal zreo
// if i write username [5] the result will be a
// that mean [0] -> k [1]-> h [2] -> a [3]->t [4]->t .....etc
// if i write username .length that will give me the long of the name in our case username .length the answer 14

// "lol"+"lol" the result is "lollol"
// ok , if i put number with string like the 1+"hi" the result "1hi" and if you write typeof 1 it will give you number why ? because the there no way to add number without to be string

// name the variable . toUpperCase() -> it make all the letter in like username uppercase
// if make variable like let Hi ="I donot want to go " and make another variable let HiUpper = Hi.toUpperCase() the HiUpper will be I DONOT WANT TO GO
//  toLowerCase same thing

// nameVariable .trim() -> it cut the first space in the line like let username = "        cut me         "; and write username.trim()  it is will be "cut me"

// let str = 'Hello, world!';   let index = str.indexOf('world');console.log(index); // 7In this example, the indexOf() method searches the string 'Hello, world!' for the value 'world'. It finds this value at position 7 (the first character has an index of 0), so it returns 7.
// If the value is not found, the method returns -1.

// ----------------------------------------slice------------------------------------------------------------------
// you can use slice for cut . examble let hello ="i am in here form wihle years";
// hello .slice (6) // "n here form wihle years"
// look it cut befor
// to cut between hello .slice (6 ,10) // 'in h'
// to cut from the end ello .slice(-5) //'years'

// ---------------------------------------replace------------------------------------------------------------
// to replace the world or letter -> .replace(cerent , now )
// let hi = "you are so smart"
// hi.replace ('y' , 'Y') // "You are so smart"

// ---------------------------------------------Template Literals-------------
// backtick ````` . its quote you can make calculate inside it like `there is ${3+4} man out side`
// and call intiger ` look for ${hi} ${hello} ${price} `; look I don't use +
// and you can make change ` look ${hello .toUpperCase}

// -------------------------------------------null---------------------------------------------------------
// it is actual value in javascript its mean assignment value,or empty valu like
// let x = null; output null

// --------------------------------------------undefined---------------------------------------------
// its also assignment value but its not like null , it is when you don't put value yet like
// let x ; this the undefined

// ------------------------------------------math object----------------------------------------------------
// Math.PI: The value of pi, approximately 3.14159.
// Math.LN2: The natural logarithm of 2, approximately 0.693.
// Math.LN10: The natural logarithm of 10, approximately 2.302.

// let z = Math.pow(2, 3);
// console.log(z); // Output: 8

// let y = Math.abs(-5);
// console.log(y); // Output: 5

// Math.floor(x): Returns the largest integer less than or equal to a number.
// math.floor(3.9999999) ; //output: 3

// math.random : its give you nummber between 0 to 1 but not include 1
// to get random number
// Math.floor(Math .random () *n )
