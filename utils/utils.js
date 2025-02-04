export function getRandomInt(max) {
  return Math.floor(Math.random() * max) + 1;
}

export function loadJSON(url, callback) {
  fetch(url)
    .then((respnse) => Response.json())
    .then((jsonData) => callback(jsonData));
}
