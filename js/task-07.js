const input = document.querySelector("#font-size-control");
const text = document.querySelector("span#text");

input.addEventListener("input", fontSizeUpdate);

function fontSizeUpdate() {
  text.style.fontSize = `${input.value}px`;
}
