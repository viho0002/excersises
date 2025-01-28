"use strict";
window.addEventListener("load", sidenVises);
let minRand = getRandomInt(100);
let UN;
function sidenVises() {
  console.log("sidenVises");
  console.log("tal " + minRand);
  document.querySelector("#minrand").textContent = "Dit tal er " + minRand;
  document.querySelector("button").addEventListener("click", evaluateTextfield);
}

function evaluateTextfield() {
  console.log("klik");
  console.log("KLIK", document.querySelector(".userNumber").value);
  UN = document.querySelector(".userNumber").value;
  console.log(UN);
  if (UN == minRand) {
    document.querySelector("#hinttext").textContent = "DU GÆTTEDE RIGTIGT";
    document.querySelector("img").classList.remove("hide");
    document.querySelector("img").classList.add("god-forsvind");
  } else if (UN >= minRand) {
    document.querySelector("#hinttext").textContent = "DU GÆTTEDE FOR HØJT";
  } else {
    document.querySelector("#hinttext").textContent = "DU GÆTTEDE FOR LAVT";
  }
}

function getRandomInt(max) {
  return Math.round(Math.random() * max);
}
