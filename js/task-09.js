function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const button = document.querySelector("button.change-color");
const text = document.querySelector("span.color");
const body = document.querySelector("body");

button.addEventListener("click", changeColor);

function changeColor() {
  let newColor = getRandomHexColor();
  body.style.backgroundColor = newColor;
  text.textContent = newColor;
}
