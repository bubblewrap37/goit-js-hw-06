let counterValue = 0;
const counter = document.querySelector("#value");

const decrementButton = document.querySelector(
  "button[data-action='decrement'"
);
console.log(decrementButton);
const incrementButton = document.querySelector(
  "button[data-action='increment'"
);

decrementButton.addEventListener("click", decreaseCounter);
incrementButton.addEventListener("click", increaseCounter);

function decreaseCounter() {
  counterValue -= 1;
  counter.textContent = counterValue;
}

function increaseCounter() {
  counterValue += 1;
  counter.textContent = counterValue;
}
