"use strict";

window.addEventListener("DOMContentLoaded", start);

const Animal = {
  name: "-default name-",
  desc: "-no description-",
  type: "-unknown-",
  age: 0,
};

const allAnimals = [];

function start() {
  console.log("ready");

  loadJSON();
}

function loadJSON() {
  fetch("animals.json")
    .then((response) => response.json())
    .then((jsonData) => {
      // when loaded, prepare objects
      prepareObjects(jsonData);
    });
}

function prepareObjects(jsonData) {
  jsonData.forEach((jsonObject) => {
    // TODO: Create new object
    const animal = Object.create(Animal);

    // Extract data from json object
    const fullname = jsonObject.fullname;

    //fanger alle de vigtigt spaces i stringne
    const firstSpace = fullname.indexOf(" ");
    const secondSpace = fullname.indexOf(" ", firstSpace + 1);
    const lastSpace = fullname.lastIndexOf(" ");

    //fanger alle de ord vi gerne vil have
    const name = fullname.substring(0, firstSpace);
    const desc = fullname.substring(secondSpace + 1, lastSpace);
    const type = fullname.substring(lastSpace + 1);

    //viser alle navne
    // console.log(`name: _${name}_ type: _${type}_ desc: _${desc}_`);

    //put cleaned dat into newly created object
    animal.name = name;
    animal.type = type;
    animal.desc = desc;

    animal.age = jsonObject.age;

    //Add object to global array
    allAnimals.push(animal);

    // TODO: MISSING CODE HERE !!!
  });

  displayList();
}

function filterList() {
  //create a filter list of only cats
  const filteredList = allAnimals.filter(isCat);
  console.log("filter", filteredList);

  displayList(filteredList);
}

function isCat(animal) {
  return animal.type === "cat";
}

function displayList() {
  // clear the list
  document.querySelector("#list tbody").innerHTML = "";

  // build a new list
  allAnimals.forEach(displayAnimal);
}

function displayAnimal(animal) {
  // create clone
  const clone = document.querySelector("template#animal").content.cloneNode(true);

  // set clone data
  clone.querySelector("[data-field=name]").textContent = animal.name;
  clone.querySelector("[data-field=desc]").textContent = animal.desc;
  clone.querySelector("[data-field=type]").textContent = animal.type;
  clone.querySelector("[data-field=age]").textContent = animal.age;

  // append clone to list
  document.querySelector("#list tbody").appendChild(clone);
}
