const nodeList = document.querySelectorAll("li.item");

console.log(`Number of categories: ${nodeList.length}`);

nodeList.forEach(function (category) {
  console.log(`Category: ${category.querySelector("h2").textContent}`);
  console.log(`Elements: ${category.querySelectorAll("li").length}`);
});
