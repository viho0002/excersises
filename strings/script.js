// const bob = "    bon  go   if   ";
// const bobs = "Goethestraße";
// console.log(bob);
// console.log(bob.trim());
// console.log(bob.replaceAll("   ", " "));
// console.log(bobs.toUpperCase());
// console.log(bobs.slice(6));

// Check om navn har - i
// Includes("-") indexOf

//TING TIL AT FINDE SLUTNINGEN AF DET FØRSTE NAVN I DET FØRSTE NAVN
// .indexOf() charat() substring()

//TING TIL AT FINDE STARTEN AF DET SIDSTE NAVN
// .indexOf() substring() lastIndexOf

//TJECK OM AALBORG ER SOTRTET FØR ELLER EFTER ALERUP I DANSK
// .localecompare

//ADD DOTS TO A STRING, SO THE STRING BECOMS AT LEAST "20"
// .padEnd("20", ".")

//ADD DOTS TO A STRING, SO THE STRING BECOMS AT LEAST "20"
// .padEnd("20", ".")

//ADD DOTS BEFORE TEXT SO THE TEXT WILL BE ATLEAST "10"
// .padStart("20", ".")

//ADD DOTS BEFORE TEXT SO THE TEXT WILL BE ATLEAST "10"
// .padStart("20", ".")

//CREATE A STRING OF A SPECIFIC NUMBER OF *
// .repeat()

//CHANGE ALL "å" TIN TEXT "aa"
// .replaceAll

//REMOVE ANY DOUBLE- OR TRIPLE- SPACES INSIDE A TEXT
// .repeat()

// GET THE LAST 10 CHARACTERRS OF A NAME
// .substring() .length() .slice()

// SEPARATE A COMMA-SEPARATED LIST INTO A ARRAY OF INDIVIDUAL
// .split

// CHECK IF A URL BEGINS WITH HTTP OR HTTPS
// .startsWith()

// GET A MIDDLE NAME OF A FULL NAME STRING
// .substring() indexOf() .split

// IN ADDITION, HOW MIGHT YOU FIND THE PARAMETER VALUES TO USE -i.e.WEN THE MIDDLE NAME STARTS AND ENDS?
//

// CONVERT TO STRING ON CAPITAL LETTER
// toUpperCase

// CONVERT TO STRING TO ONLY NON CAPITAL LETTERS
// toLowerCase

// CONVERT GERMAN WORD LIKE "xxx" CORRECTLY TO "GOETHESTRASSE"
// toUpperCase

// CONVERT ONLY THE FIRST CHARACTER IN A STING TO UPPER CAS AND THE REST TO LOWERCASE
// toUpperCase
// toLowerCase
// substring

// REMOVE EXTRA WHITESPACE
// trim
// trimStart
// trimEnd

const noom = "Viktor Felix Brøndum Holm";
let firstName = noom.substring(noom.indexOf(""), noom.indexOf(" "));
let middleName = noom.substring(noom.indexOf(" ") + 1, noom.lastIndexOf(" "));
let lastName = noom.substring(noom.lastIndexOf(" ") + 1);

console.log(firstName, "_", middleName, "_", lastName);
