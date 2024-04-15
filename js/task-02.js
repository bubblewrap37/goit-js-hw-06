const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const list = document.querySelector("#ingredients");

ingredients.forEach(function (ingredient, index) {
  const element = document.createElement("li");
  element.textContent = ingredient;
  list.append(element);
});
