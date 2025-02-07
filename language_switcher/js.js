"use strict";
const texts = {
  de: {
    texts: [
      { text: "Das Bot", location: ".header" },
      { text: "Das Ro-Bot", location: ".footer" },
    ],
  },
  da: {
    texts: [
      { text: "Båden", location: ".header" },
      { text: "Robotten", location: ".footer" },
    ],
  },
};
let locale = "da";
const localeDE = "de";
const sb = document.querySelector("#valg");

changeLang(locale);

console.log(sb[1]);
document.querySelector("button").addEventListener("click", () => {
  let localChange;
  if (sb.value === "danish") {
    localChange = "da";
  } else {
    localChange = "de";
  }
  changeLang(localChange);
});

function changeLang(lang) {
  console.log("sb =", sb.value);
  if (sb.value === "danish") {
    texts[`${lang}`].texts.forEach((texts) => {
      console.log("wowser", texts);
      document.querySelector(`${texts.location}`).textContent = `${texts.text}`;
    });
  }
  if (sb.value === "german") {
    texts[`${lang}`].texts.forEach((texts) => {
      console.log("wowser", texts);
      document.querySelector(`${texts.location}`).textContent = `${texts.text}`;
    });
  }
}
