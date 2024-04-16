const input = document.querySelector("#validation-input");
const expectedInput = +input.dataset.length;

input.addEventListener("blur", verifyInput);

function verifyInput() {
  if (input.value.length === expectedInput) {
    if (input.classList.contains("invalid")) {
      input.classList.replace("invalid", "valid");
    } else {
      input.classList.add("valid");
    }
  } else {
    if (input.classList.contains("valid")) {
      input.classList.replace("valid", "invalid");
    } else {
      input.classList.add("invalid");
    }
  }
}
