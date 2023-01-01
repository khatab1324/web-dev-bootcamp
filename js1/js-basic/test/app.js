// ---------------------------------------------------- if inside if--------------------------------------
// the order is password must be 5+characters
// password cann't include space

// we don't know how to connect js in html
// for that resone we will use prompt

const password = prompt("plase enter password");
// password must be 5+ characters
if (password.length <= 5) {
  console.log("your password must be over 5 character ");
} else {
  console.log("your password is parfect");
}
// password cann't include space
// look you should check for that by .indexOf('place of the letter you want') if don't include it will give you -1
// that mean if the password don't have space it will give you -1 ,if give you number that the place of space that mean the password have space
if (password.indexOf(" ") === -1) {
  console.log("yas, there is no space");
} else {
  console.log("oh, shit there is space");
}
// the above code is shit you need massege not a litter because that i will do this

if (password.length >= 5) {
  if (password.indexOf(" ") === -1) {
    console.log("");
  } else {
    console.log("oh, shit there is space");
  }
} else {
  console.log("your password is parfect");
}
// and you can make it more small by using and
// if (password.length >= 5 && password.indexOf(" ") === -1) {
//
//        else {
//              console.log("oh, shit there is space");}
// }
// else {
//   console.log("your password is parfect");
// }
const option = "car1";

switch (option) {
  case "car1":
    console.log("Car 1 is selected");
    break;
  case "car2":
    console.log("Car 2 is selected");
    break;
  case "car3":
    console.log("Car 3 is selected");
    break;
  default:
    console.log("No car is selected");
}
