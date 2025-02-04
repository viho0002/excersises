//Generere
// function getRandomInter(max) {
//   return Math.round(Math.random() * max);
// }

// const list = document.querySelector("ul");
// const kunder = Array(20).fill(0);

// function opdaterDiagram() {
//   const nyverdi = getRandomInter(100);

//   kunder.push(nyverdi);
//   if (kunder.length > 20) {
//     kunder.shift();
//   }

//   list.innerHTML = "";

//   kunder.forEach((verdi) => {
//     const li = document.createElement("li");
//     li.style.setProperty("--height", verdi);
//     list.appendChild(li);
//   });
// }

// setInterval(opdaterDiagram, 1000);

// opdaterDiagram();

const list = document.querySelector("ul");

setInterval(geneerateBars, 200);

const kunder = [];

function geneerateBars() {
  const randoNum = Math.round(Math.random() * 100);
  kunder.push(randoNum);
  console.log(kunder);

  if (kunder.length >= 20) {
    //Hvad skal der ske når den er længere end 20
    kunder.shift();
    list.removeChild(list.firstChild);
  }

  const li = document.createElement("li");
  li.style.setProperty("--height", randoNum);
  list.appendChild(li);
}
