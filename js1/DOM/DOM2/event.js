// this better idea to but the onClick here
const hoppButton = document.querySelector("#hopButton");
hoppButton.onclick = function () {
  console.log("your hoppy araived");
  console.log("I will looking for your hoppy");
};
function menuConect() {
  console.log("menu");
}
// it should be inside function
const Mconect = document.querySelector(".conect");
Mconect.onmouseenter = menuConect;
// onmouseenter just when you hover on the conect

// -------------------------------------------------- addEventListener -------------------------------------
// specify the event type and a callback to run
// addEventListener('action','what happen')
const signin = document.querySelector(".sign-in");
signin.addEventListener("click", function () {
  console.log("the user want signup");
});
// and we enter use addEventListener becuese it can show tow valiu at the same time

// --------------------------------------------change color project --------------------------------------
const body = document.querySelector("body");
const makeColor = () => {
  let r = Math.floor(Math.random() * 255) + 1;
  let g = Math.floor(Math.random() * 255) + 1;
  let b = Math.floor(Math.random() * 255) + 1;
  return `rgb(${r},${g},${b})`;
};
const gcolorButton = document.querySelector("#gcolor");
gcolorButton.addEventListener("click", function () {
  body.style.backgroundColor = makeColor();
});
console.log(Math.floor(Math.random() * 255) + 1);

// ------------------------------------------------Events & The Keyword This-----------------------
const buttons = document.querySelectorAll("button");
for (let button of buttons) {
  button.addEventListener("click", function () {
    this.style.backgroundColor = makeColor();
    // this => it refear on button because js donot care becuase button mintion above
  });
}

// -----------------------------------------------Keyboard Events & Event Objects--------------------------
// event object or evt it give you information like clintx ,clinty and those is where the user acuealy clike
// how to write it
hoppButton.onclick = function (evt) {
  console.log("your hoppy araived");
  console.log("I will looking for your hoppy");
  console.log(evt);
};
// ok new keyboard events
const input = document.querySelector("input");
input.addEventListener("keyup", function () {
  console.log("keyup");
});
input.addEventListener("keydown", function () {
  console.log("keydown");
});

// if you want to see keyboard event
input.addEventListener("keydown", function (e) {
  console.log(e);
});
// if you notes there is key and code
input.addEventListener("keydown", function (e) {
  console.log(e.key);
  console.log(e.code);
});

// ---------------------------------------------------form event --------------------------------------------
// when you sent a the form the page will refreash but we don't want that we need just keep the information

// const form = document.querySelector("#shelterform");
// form.addEventListener("submit", function (e) {
//   console.log("submittion");
// });
// the page still refresh ,because that we use preventDefault()
//  and i want save the name and add to html  syntax
const form = document.querySelector("#shelterform");
const inputs = document.querySelector("#inputName");
const names = document.querySelector("#Names");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  const Newinputs = inputs.value;
  const newli = document.createElement("li");
  newli.innerTex = Newinputs;
  names.append(newli);
  inputs.value = "";
});
// input.value that what the user inter inside input box

// ======================================================== Input & Change Events ==============================
// it so easy wach the vedio

// ===============================================Event Bubbling==========================================
// to stap it
// e.stopPropagation()

// =============================================================Event Delegation==============================
// to remove your event you make it by target
