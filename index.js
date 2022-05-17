var body = document.querySelector("body");
var button = document.querySelector("button");

// Lav en variabel, der refererer til ".mode"
// Lav funktionen "darkMode", som
// a) toggle'r klassen "dark" vha. classList o
button.addEventListener("click", darkMode);

function darkMode() {
  body.classList.toggle("dark");
  if (button.innerHTML == "Biograf Tilstand") {
    button.innerHTML = "Lys Tilstand";
  } else {
    button.innerHTML = "Biograf Tilstand";
  }
}

// if (body.classList.contains(dark)) {
//   button.textContent = "Lys Tilstand";
// } else {
//   button.textContent = "Biograf Tilstand";
// }
