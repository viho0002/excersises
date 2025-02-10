"use strict";
const texts = {
  de: {
    texts: [
      { text: "Das Bot", location: ".header h1" },
      { text: "Das Ro-Bot", location: ".footer" },
    ],
  },
  da: {
    texts: [
      { text: "Båden", location: ".header h1" },
      { text: "Robotten", location: ".footer" },
    ],
  },
};
let locale = "da";

// console.log(texts[locale].texts);

//TILFØJER EN TING DER OPDATERE NÅR SELECTOREN DEN BLIVER ÆÆDNRET
document.querySelector("#locale_select").addEventListener("change", languageChange);

function languageChange() {
  //FINDER HVILKEN VALUE DER ER SKREVET I DEN BESTEMTE SELECCTORS VALUE
  locale = document.querySelector("#locale_select").value;
  //CONSOLE.LOGGER VEJEN FOR AT RAMME DEN RIGTIGE TING I ARRAET
  console.log(texts[locale].texts);
  //ÆNDRE TEXTEN PÅ DEN LOCATION TIL DET DER PASSER I ARRAET
  texts[locale].texts.forEach((element) => {
    document.querySelector(element.location).textContent = element.text;
  });
}
