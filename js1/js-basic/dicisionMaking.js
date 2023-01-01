// ----------------------------------------------------dicisions-----------------------------------------------------------------
// like 1>3 // false
// 8 >7 //true
// and you can comber the charictor like
// 'a' > 'b' // true
// https://www.unicode.org/charts/PDF/U0000.pdf this link show you the order of charictor

//--------------------------------- == double equals-----------------------------------
//-checks for equality of value , but not equality of value , but not equalit
// It coerces both values to the same type and then compares them
// this can lead to some unexpected results!
// LIKE : 1 == '1' //true         2=='2' //true
// 0 ==false // true
// null ==undefined and that so werid

// -------------------------------------------------- === triple equation , strict equality -------------------------------------------------------------------
// it check the the value and the type of value like:
// 5 === 5 // true
// 0 === false // false
// 2 === '2'

// -------------------------------------------------------- != not equal--------------------------------
// like
// 1 != 2 // true
// 2 != '5' // true
// 1 != '1' // false     why ?? because it dosn't care in type it opisite ==

// --------------------------------------------!== ----------------------------
// it is opisite the ===

// ok always use === and !== because you don't need problem

// -------------------------------------------------------console item ---------------------------------------------------
//  it is used in console
// console.log() print arguments to the console like
// console.log("hi") // output "hi"

// console.ward () it make warning in console

// console.error() it make error in console

// alert () it make alert in the page like
// alert ("hi there");

// prompt() to enter something like
// prompt ("what is your age ?")
// and he will enter the age and you can show it in console and you can make it in variable like
// let age = prompt ("what is your age ?");
// you should know it retearn to you as string

// to chang string to number or the opposite .write parseInt(age) now it is as number

// -----------------------------------------------if condition ------------------------------------------
// you know it if ( x +2 == 4){ the condition}

// ----------------------------------------------------else if-------------------------------------------
// if the frist condition not true try this
//

// -------------------------------------------else----------------------------------------
// when you have alot thing have the same thing use else

// ------------------------------------truthy - falsy-----------------------------------------------------
// every thing in js is truthy
// the element that is falsy (NaN , 0 , false ,emdy string ,'' , undifined)
// like if you write   if(0) that mean if(false) that mean the condition will not work
// if i write if(-1) is truthy , if (NaN) is falsy

// ---------------------------------and ,or , not--------------------------------------------------
// and &&
//or ||
// not !

//-----------------------------------------------------Switch-----------------------------------------------------
// const option = 'option1';

// switch (option) {
//   case 'option1':
//     console.log('Option 1 is selected');
//     break;
//   case 'option2':
//     console.log('Option 2 is selected');
//     break;
//   case 'option3':
//     console.log('Option 3 is selected');
//     break;
//   default:
//     console.log('No option is selected');
//  }
// In this example, the switch statement compares the value of the option variable to the values in each of the case clauses.
// If there is a match, the code inside the corresponding block is executed. If none of the case values match, the code inside the default block is executed.

// Note that each case block should end with a break statement to exit the switch block. If you omit the break statement, the code will continue to be executed into the next case block, even if the values do not match.
// that mean you have one value want comper it use switch
