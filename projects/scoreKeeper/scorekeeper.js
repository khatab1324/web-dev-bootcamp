let POne = document.querySelector(".POne");
let PTow = document.querySelector(".PTow");
const addOne1 = document.querySelector(".addOne1");
const addOne2 = document.querySelector(".addOne2");
const chosenumber = document.querySelector("#chosenumber");
const audio = document.getElementById("audio");
const reset = document.querySelector(".reset");
const p = document.querySelector("p");
const p2 = document.querySelector("#p2");

let chosenumberInput = 5;
let p1score = 0;
let p2score = 0;
let check1 = 0;
let check2 = 0;
addOne1.addEventListener("click", function () {
  if (check1 !== chosenumberInput) {
    if (check1 != -1) {
      if (p1score !== chosenumberInput) {
        p1score += 1;
        POne.textContent = p1score;
        console.log(p1score);
        check1 += 1;
        if (check1 === chosenumberInput) {
          check2 = -1;
        }
        if (check1 === chosenumberInput) {
          console.log("player1 win");
          p.innerHTML = "Player one 🏆";
          audio.play();
          PTow.style.color = "red";
          POne.style.color = "green";
        }
      }
    }
  }
});
addOne2.addEventListener("click", function () {
  if (check2 !== chosenumberInput) {
    if (check2 != -1) {
      if (p2score !== chosenumberInput) {
        p2score += 1;
        PTow.innerHTML = p2score;
        check2 += 1;
        if (check2 === chosenumberInput) {
          check1 = -1;
        }
        if (check2 === chosenumberInput) {
          p2.innerHTML = "Player tow 🏆";
          PTow.style.color = "green";
          POne.style.color = "red";
          audio.play();
        }
      }
    }
  }
});
chosenumber.addEventListener("input", function (e) {
  chosenumberInput = parseInt(this.value);
  console.log(this.value);
});

reset.addEventListener("click", function () {
  console.log("clicked");
  chosenumberInput = 5;
  p1score = 0;
  p2score = 0;
  check1 = 0;
  check2 = 0;
  POne.innerHTML = 0;
  PTow.innerHTML = 0;
  audio.pause();
  PTow.style.color = "black";
  POne.style.color = "black";
});
