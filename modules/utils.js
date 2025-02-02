export function batmand(user) {
  console.log(`${user} is batmand`);
}

export function getRandomInter(max) {
  return Math.floor(Math.random() * max) + 1;
}

export function $(sel) {
  return document.querySelector(sel);
}

export function $$(sel) {
  return document.querySelectorAll(sel);
}
