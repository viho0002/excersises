const vehicles = [
  { type: "Bus", fuel: "Diesel", passengers: 45, stops: ["Nørrebrogade", "Elmegade"] },
  { type: "Bil", fuel: "Benzin", passengers: 4, ownedBy: "Klaus" },
  { type: "Cykel", fuel: "Rugbrød", passengers: 0, ownedBy: "Jonas", isElectric: true },
  { type: "Bil", passengers: 5, ownedBy: "Elon", isElectric: true },
  { type: "MC", fuel: "Benzin", passengers: 2, ownedBy: "Fonda" },
  { type: "Cykel", fuel: "Rugbrød", passengers: 2, ownedBy: "Vingegård", isTandem: true },
  { type: "MC", fuel: "Benzin", passengers: 2, ownedBy: "Yolanda" },
  { type: "Knallert", fuel: "Benzin", passengers: 1, ownedBy: "Børge" },
  { type: "Knallert", fuel: "Benzin", passengers: 1, ownedBy: "Jonas" },
  { type: "Løbehjul", passengers: 1, isElectric: true },
];
const tbodyPointer = document.querySelector("tbody");
showTheseVehicles(vehicles);

//VISER ALLE KNAPPERS DATA
document.querySelectorAll("button").forEach((btn) => {
  btn.addEventListener("click", () => {
    filterHandler(btn.dataset.filter);
  });
});
function filterHandler(filter) {
  console.log("filter", filter);
  let filteredArr;
  switch (filter) {
    case "alle":
      filteredArr = vehicles;
      // showTheseVehicles(vehicles);
      console.log("wowsers all");
      break;
    case "isElectric":
      filteredArr = vehicles.filter((vehicle) => vehicle.isElectric);
      // showTheseVehicles(Elbiler);
      console.log("wowsers elec");
      break;
    case "moreThanOnePass":
      filteredArr = vehicles.filter((vehicle) => vehicle.passengers >= 2);
      // showTheseVehicles(Smaabiler);
      console.log("wowsers more");
      break;
    case "jonasOwnedElectrical":
      filteredArr = vehicles.filter((vehicle) => vehicle.ownedBy == "Jonas" && vehicle.isElectric);
      // showTheseVehicles(Jonasbiler);
      console.log("wowsers Jonas");
      break;
    case "ryebread":
      filteredArr = vehicles.filter((vehicle) => vehicle.fuel == "Rugbrød" && vehicle.passengers <= 2);
      // showTheseVehicles(Ryebreadbiler);
      console.log("wowsers rugbrød");
      break;
  }
  showTheseVehicles(filteredArr);
}
// GAMMEL GAMMEL GAMMEL GAMMEL
// GAMMEL GAMMEL GAMMEL GAMMEL
// // filtere
// function elVihecles(vehicle) {
//   return vehicle.isElectric === true;
// }
// function smolVihecles(vehicle) {
//   return vehicle.passengers >= 2;
// }

// function jonasVihecles(vehicle) {
//   return vehicle.ownedBy == "Jonas" && vehicle.isElectric === true;
// }
// function ryebreadVihecles(vehicle) {
//   return vehicle.fuel == "Rugbrød" && vehicle.passengers <= 2;
// }

// const Elbiler = vehicles.filter(elVihecles);
// const Smaabiler = vehicles.filter(smolVihecles);
// const Jonasbiler = vehicles.filter(jonasVihecles);
// const Ryebreadbiler = vehicles.filter(ryebreadVihecles);

//VISER ALT DER KØRE PÅ EL
// function showEl() {
//   showTheseVehicles(Elbiler);
// }

// //VISER TING DER HAR MEGET PLADS
// function showSmol() {
//   showTheseVehicles(Smaabiler);
// }

// //HVISER TING SOM JONAS EJER I ARRAYEDT
// function showJonas() {
//   showTheseVehicles(Jonasbiler);
// }

// //VISER TING DER KØRE PÅ RUGBRØD
// function showrugbroed() {
//   showTheseVehicles(Ryebreadbiler);
// }

// //HVISER HELE ARRAYEDT
// function showMain() {
//   showTheseVehicles(vehicles);
// }
// GAMMEL GAMMEL GAMMEL GAMMEL
// GAMMEL GAMMEL GAMMEL GAMMEL
//HVISER KODEN PÅ

function showTheseVehicles(arr) {
  tbodyPointer.innerHTML = "";
  arr.forEach((each) => {
    tbodyPointer.innerHTML += `<tr>
  <td>${beautify(each.type)}</td>
  <td>${beautify(each.fuel)}</td>
  <td>${beautify(each.passengers)}</td> 
  <td>${beautify(each.stops)}</td>
  <td>${beautify(each.ownedBy)}</td>
  <td>${beautify(each.isElectric)}</td>
  <td>${beautify(each.isTandem)}</td>
</tr>`;
  });
}

//ÆNDRE TRUE TIL X OG UNDEFINED TIL -
function beautify(str) {
  if (str === true) {
    str = "X";
  }
  if (str === undefined) {
    str = "-";
  }
  return str;
}
