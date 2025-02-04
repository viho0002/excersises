// return bc.map((navn) => ({
//   name: { name: navn.slug }, // [artist]=artist.slug // send al data med som props
// }));

const bc = [
  { name: "Hvidevarer", link: "/hvidevarer" },
  { name: "Vaskemaskiner", link: "/hvidevarer/vaskemaskiner" },
  { name: "Bosch", link: "/hvidevarer/vaskemaskiner/bosch/" },
];

document.querySelector("button").addEventListener("click", lavsti);
function lavsti() {
  document.querySelector("button").removeEventListener("click", lavsti);
  bc.forEach((vare, index) => {
    console.log("vare", vare.name);
    console.log("link", vare.link);
    console.log("********", index);
    console.log(bc.length);
    if (index === bc.length - 1) {
      console.log("wow");
      document.querySelector("ul").innerHTML += `<li> ${vare.name} </li>`;
    } else {
      document.querySelector("ul").innerHTML += `<li><a href="${vare.link}"> ${vare.name} / </a></li>`;
    }
  });
}

// const copyBc = [];

// // before
// for (let i = 0; i < bc.length; i++) {
//   copyBc.push(bc[i]);
// }

// // after
// bc.forEach((item) => {
//   copyBc.push(item);
//   item.forEach(showProduct);
// });

// function showList2(json) {
//   console.log("json", json);
//   json.forEach(showProduct);
// }

// function showProduct(product) {
//   const clone = productTemplate.cloneNode(true);
//   clone.querySelector("ul").innerHTML = `<li><a href="${product.link}">${product.name}</a></li>`;
//   productList.appendChild(clone);
// }
