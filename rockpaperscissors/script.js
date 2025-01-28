window.addEventListener("load", sidenVises);

let points = 0;
let life = 3;

let rock = false;
let paper = false;
let scissors = false;
console.log("Type of rock", typeof rock);

let pcnumb;
let pcrock = false;
let pcpaper = false;
let pcscissors = false;

function sidenVises() {
  console.log("sidenVises");
  //skjul andre skærme
  //Vis start skærm
  //Gør startknap klikbar
  document.querySelector(".rock").addEventListener("mousedown", pickrock);
  document.querySelector(".paper").addEventListener("mousedown", pickpaper);
  document.querySelector(".scissors").addEventListener("mousedown", pickscissors);
}

function pickrock() {
  console.log("rock");
  resetpic();
  rock = true;
  document.querySelector("#player1").classList.add("rock");

  pcnumb = getRandomInt(3);
  console.log(pcnumb);
  pcdecision();
  if (pcrock == true) {
    console.log("pcrock sandt");
    document.querySelector("#player2").classList.add("rock");
    document.querySelector("#draw").classList.remove("hidden");
    reset();
  } else if (pcpaper == true) {
    console.log("paper sandt");
    document.querySelector("#player2").classList.add("paper");
    document.querySelector("#lose").classList.remove("hidden");
    reset();
  } else {
    console.log("scissors sandt");
    document.querySelector("#player2").classList.add("scissors");
    document.querySelector("#win").classList.remove("hidden");
    reset();
  }
}

function pickpaper() {
  console.log("paper");
  resetpic();
  paper = true;
  document.querySelector("#player1").classList.add("paper");

  pcnumb = getRandomInt(3);
  console.log(pcnumb);
  pcdecision();
  if (pcrock == true) {
    console.log("pcrock sandt");
    document.querySelector("#player2").classList.add("rock");
    document.querySelector("#win").classList.remove("hidden");
    reset();
  } else if (pcpaper == true) {
    console.log("paper sandt");
    document.querySelector("#player2").classList.add("paper");
    document.querySelector("#draw").classList.remove("hidden");
    reset();
  } else {
    console.log("scissors sandt");
    document.querySelector("#player2").classList.add("scissors");
    document.querySelector("#lose").classList.remove("hidden");
    reset();
  }
}

function pickscissors() {
  console.log("scissors");
  resetpic();
  scissors = true;
  document.querySelector("#player1").classList.add("scissors");

  pcnumb = getRandomInt(3);
  console.log(pcnumb);
  pcdecision();
  if (pcrock == true) {
    console.log("pcrock sandt");
    document.querySelector("#player2").classList.add("rock");
    document.querySelector("#lose").classList.remove("hidden");
    reset();
  } else if (pcpaper == true) {
    console.log("paper sandt");
    document.querySelector("#player2").classList.add("paper");
    document.querySelector("#win").classList.remove("hidden");
    reset();
  } else {
    console.log("scissors sandt");
    document.querySelector("#player2").classList.add("scissors");
    document.querySelector("#draw").classList.remove("hidden");
    reset();
  }
}

function getRandomInt(max) {
  return Math.ceil(Math.random() * max);
}

function pcdecision() {
  if (pcnumb == 1) {
    pcrock = true;
  } else if (pcnumb == 2) {
    pcpaper = true;
  } else if (pcnumb == 3) {
    pcscissors = true;
  }
  console.log("desion er", pcrock, pcpaper, pcscissors);
}

function reset() {
  rock = false;
  paper = false;
  scissors = false;
  pcnumb = 0;
  pcrock = false;
  pcpaper = false;
  pcscissors = false;
}

function resetpic() {
  document.querySelector("#player2").classList.remove("rock");
  document.querySelector("#player2").classList.remove("paper");
  document.querySelector("#player2").classList.remove("scissors");
  document.querySelector("#player1").classList.remove("rock");
  document.querySelector("#player1").classList.remove("paper");
  document.querySelector("#player1").classList.remove("scissors");
  document.querySelector("#win").classList.add("hidden");
  document.querySelector("#draw").classList.add("hidden");
  document.querySelector("#lose").classList.add("hidden");
}
