document.addEventListener("DOMContentLoaded", sidenVises);

let min = 0;
let max = 100;
let wow = 0;
let get = 0;

function sidenVises() {
  console.log("sidenVises");

  min = 0;
  max = 100;
  wow = 0;
  get = 0;

  document.querySelector("#buttonG").classList.remove("hidden");
  document.querySelector("#buttonW").classList.add("hidden");
  document.querySelector("#buttonL").classList.add("hidden");
  document.querySelector("#buttonH").classList.add("hidden");
  document.querySelector("#buttonW").addEventListener("click", win);
  document.querySelector("#buttonG").addEventListener("click", geat);
  document.querySelector("#buttonL").addEventListener("click", numLow);
  document.querySelector("#buttonH").addEventListener("click", numHigh);
}

function numLow() {
  min = wow;
  wow = Math.ceil((max - min) / 2 + min);
  get += 1;
  updateScore();
}

function numHigh() {
  max = wow;
  wow = Math.ceil((max - min) / 2 + min);
  get += 1;
  updateScore();
}

function win() {
  document.querySelector("body").classList.remove("red1", "red2", "red3", "red4", "red5", "red6");
  document.querySelector("div").classList.remove("shake1", "shake2", "shake3", "shake4", "shake5", "shake6");
  document.querySelector("p").classList.remove("shake1", "shake2", "shake3", "shake4", "shake5", "shake6", "reed1", "reed2", "reed3", "reed4", "reed5", "reed6");
  document.querySelector("#gaet").textContent = "Aha! jeg viste at " + wow + " var svaret fra starten, det tog mig kun " + get + " gæt";
  sidenVises();
}

function geat() {
  wow = (max - min) / 2 + min;
  get += 1;
  updateScore();
  document.querySelector("div").classList.add("shake" + get);
  document.querySelector("#buttonW").classList.remove("hidden");
  document.querySelector("#buttonL").classList.remove("hidden");
  document.querySelector("#buttonH").classList.remove("hidden");
  document.querySelector("#buttonG").classList.add("hidden");
}

function updateScore() {
  document.querySelector("#gaet").classList.add("reed" + get, "shake" + get);
  document.querySelector("body").classList.add("red" + get);
  document.querySelector("#min").textContent = min;
  document.querySelector("#max").textContent = max;
  document.querySelector("#gaet").textContent = "Hmmmm er dit nummer " + wow + "?";
}

const stop = false;

function testEmptyReturn() {
  if (stop) {
    return;
  }

  console.log("Vi har noget her");
}
