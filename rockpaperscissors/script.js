("use strict");
import { getRandomInter } from "../modules/utils.js";
window.addEventListener("load", sidenVises);

//hvis jeg har lyst til at tilføje point
let points = 0;
let life = 3;

//forkortet fordi jeg bruger dem meget
console.log("this is random", getRandomInter(9999));
const player1 = document.querySelector("#player1");
const player2 = document.querySelector("#player2");

//Holder styr på hvilken spilleren har valgt
// let rock = false;
// let paper = false;
// let scissors = false;

let win = 0;
let lose = 0;
let draw = 0;

//Holder styr på hvilket tal computeren har rollet og hvad det giver
let pcnumb;
let pcrock = false;
let pcpaper = false;
let pcscissors = false;

//Starter spillet hved at adde event listeners til spillet
function sidenVises() {
  console.log("sidenVises");
  win = 0;
  lose = 0;
  draw = 0;
  document.querySelector(".rock").addEventListener("click", pickrock);
  document.querySelector(".paper").addEventListener("click", pickpaper);
  document.querySelector(".scissors").addEventListener("click", pickscissors);
  document.querySelector("h2").textContent = `Wins = ${win} ---- Draws = ${draw} ---- Loses = ${lose}`;
}

//Tilføjer shake animationen og sender den videre til den næste funtion
function pickrock() {
  player1.classList.add("shake");
  player2.classList.add("shake");
  player1.addEventListener("animationend", pickrock1);
}

//Tilføjer shake animationen og sender den videre til den næste funtion
function pickpaper() {
  player1.classList.add("shake");
  player2.classList.add("shake");
  player1.addEventListener("animationend", pickpaper1);
}

//Tilføjer shake animationen og sender den videre til den næste funtion
function pickscissors() {
  player1.classList.add("shake");
  player2.classList.add("shake");
  player1.addEventListener("animationend", pickscissors1);
}

//Main funtion som skifter spillerens hånd til det den skal være og finder ud af hvilken
function pickrock1() {
  //Fjerner alle classer sådan at der ikke er noge problem når det kommer til at give den en ny class
  resetpic();
  //Gør den der blev klikket på true KAN GODT SLETTES
  //Ændre billedet sådan at det passer til den hånd man klikkede på
  player1.classList.add("rock");
  //Køre pc decision som ruller et tal mellem 1-3 og giver det til pcnum, pc num kommer så i en if statement
  //det tal der kommer ud vil vælge om computeren spiller sten saks eller papir
  pcdecision();
  // if statementen tjekker hvad for en af de booleans som computeren bruger til at vælge hvilken titel der skal vises
  if (pcrock == true) {
    player2.classList.add("rock");
    document.querySelector("#draw").classList.remove("hidden");
    draw += 1;
    updatescore();
  } else if (pcpaper == true) {
    player2.classList.add("paper");
    document.querySelector("#lose").classList.remove("hidden");
    lose += 1;
    updatescore();
  } else {
    player2.classList.add("scissors");
    document.querySelector("#win").classList.remove("hidden");
    win += 1;
    updatescore();
  }
  // fjerner eventlisteneren så den ikke bliver brugt dubbelt senere

  // reset gør alle booleansne false sammen med at gøre pcnumre til 0 sådan at alt bliver genstartet
  reset();
}

function pickpaper1() {
  resetpic();
  player1.classList.add("paper");
  pcdecision();
  if (pcrock == true) {
    player2.classList.add("rock");
    document.querySelector("#win").classList.remove("hidden");
    win += 1;
    updatescore();
  } else if (pcpaper == true) {
    player2.classList.add("paper");
    document.querySelector("#draw").classList.remove("hidden");
    draw += 1;
    updatescore();
  } else {
    player2.classList.add("scissors");
    document.querySelector("#lose").classList.remove("hidden");
    lose += 1;
    updatescore();
  }

  reset();
}

function pickscissors1() {
  resetpic();
  player1.classList.add("scissors");
  pcdecision();
  if (pcrock == true) {
    player2.classList.add("rock");
    document.querySelector("#lose").classList.remove("hidden");
    lose += 1;
    updatescore();
  } else if (pcpaper == true) {
    player2.classList.add("paper");
    document.querySelector("#win").classList.remove("hidden");
    win += 1;
    updatescore();
  } else {
    player2.classList.add("scissors");
    document.querySelector("#draw").classList.remove("hidden");
    lose += 1;
    updatescore();
  }

  reset();
}

function getRandomInt(max) {
  return Math.ceil(Math.random() * max);
}

function pcdecision() {
  pcnumb = getRandomInt(3);
  console.log(pcnumb);
  if (pcnumb == 1) {
    pcrock = true;
  } else if (pcnumb == 2) {
    pcpaper = true;
  } else if (pcnumb == 3) {
    pcscissors = true;
  }
  console.log("desion er", pcrock, pcpaper, pcscissors);
}

function updatescore() {
  document.querySelector("h2").textContent = `Wins = ${win} ---- Draws = ${draw} ---- Loses = ${lose}`;
}

function reset() {
  console.log(`wins = ${win}`, `draws = ${draw}`, `loses = ${lose}`);
  rock = false;
  paper = false;
  scissors = false;
  pcrock = false;
  pcpaper = false;
  pcscissors = false;
  pcnumb = 0;
  player1.removeEventListener("animationend", pickpaper1);
  player1.removeEventListener("animationend", pickscissors1);
  player1.removeEventListener("animationend", pickrock1);
}

function resetpic() {
  player2.classList.remove("rock", "paper", "scissors", "shake");
  player1.classList.remove("rock", "paper", "scissors", "shake");
  document.querySelector("#win").classList.add("hidden");
  document.querySelector("#draw").classList.add("hidden");
  document.querySelector("#lose").classList.add("hidden");
}
