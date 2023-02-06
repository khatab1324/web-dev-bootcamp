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
