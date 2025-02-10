document.querySelector("#color_select").addEventListener("change", languageChange);

function languageChange() {
  let farve = document.querySelector("#color_select").value;
  document.querySelector("body").dataset.filter = farve;
}
