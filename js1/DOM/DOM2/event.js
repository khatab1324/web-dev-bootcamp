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
