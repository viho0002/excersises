// let theText = "Jeg er en tekst hvor nogle ord skal skiftes ud med nogle andre ord";
// const curseWords = [
//   { bad: "ord", good: "const" },
//   { bad: "ud", good: "grid" },
// ];

// theText.replaceAll("ord", "ting");
// const arr = theText.split("ord");
// const str = arr.join("ting");
// console.log(str);
// console.log(theText);
// const wow = theText.split(" ");
// console.log(theText.replaceAll(wow[6], "ting"));

// const strCopy = theText.split();
// console.log(strCopy);

let theText = "Programmering er sjovt! Men husk altid at bruge var,float og marquee i moderne kodning.";
const curseWords = [
  { bad: "var", good: "const" },
  { bad: "float", good: "grid" },
  { bad: "marquee", good: "just don't" },
];

document.querySelector("button").addEventListener("click", tingest);

function tingest() {
  curseWords.forEach((elm) => {
    //tager og kigger texten igennem ffor hvert bad ord og skifter det ud med det gode ord.
    //når den går igennem en gang gemmer den resultated med theText = theText.replaceAll(elm.bad, elm.good);
    theText = theText.replaceAll(elm.bad, elm.good);
    //smid texten ud der hvor den skal være
    document.querySelector("p").textContent = theText;
  });
  console.log(theText);
}

spl;

//ternary operator
// condition ? exprTrue : exprFalse

// document.querySelector("button").addEventListener("click", godknap);

// function godknap() {
//   console.log(curseWords.join());

//   //   document.querySelector("p").textContent = theText.replaceAll(curseWords[0].bad, curseWords[0].good);
//   //   document.querySelector("p").textContent = theText.replaceAll(curseWords[1].bad, curseWords[1].good);
//   //   document.querySelector("p").textContent = theText.replaceAll(curseWords[2].bad, curseWords[2].good);
// }
