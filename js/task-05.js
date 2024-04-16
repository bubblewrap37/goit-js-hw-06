const output = document.querySelector("span#name-output");
const input = document.querySelector("input#name-input");
input.addEventListener("input", updateOutput);

function updateOutput() {
  if (input.value == "") {
    output.textContent = "Anonymous";
  } else {
    output.textContent = input.value;
  }
}
