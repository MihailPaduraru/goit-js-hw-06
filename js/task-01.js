// Selectează elementul ul#categories
const categoriesList = document.querySelector("#categories");

// Numără elementele li.item și afișează numărul total
const categoryItems = categoriesList.querySelectorAll(".item");
console.log("Number of categories:", categoryItems.length);

// Parcurge fiecare element li.item
categoryItems.forEach((categoryItem) => {
  // Selecționează tag-ul <h2> pentru fiecare categorie
  const categoryTitle = categoryItem.querySelector("h2");
  // Selecționează toate elementele <li> din sublista fiecărei categorii
  const categoryElements = categoryItem.querySelectorAll("ul li");

  // Afișează numele categoriei și numărul de elemente din acea categorie
  console.log("Category:", categoryTitle.textContent);
  console.log("Elements:", categoryElements.length);
});
