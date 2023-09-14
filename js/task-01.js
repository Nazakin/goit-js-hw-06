const categoriesList = document.querySelector("#categories .item");

console.log(`Number of categories: ${categoriesList.length}`);

categoriesList.forEach(category => {
  const categoryName = category.querySelector("h2").textContent;
  const categoryItems = category.querySelector("ul li").length;

  console.log(`Category: ${categoryName}`);
  console.log(`Elements: ${categoryItems}`);
});


// const categories = document.querySelectorAll('h2');
// const list = document.querySelectorAll('ul')

// console.log(`Number of categories ${categories.length}`);

// categories.forEach((res, index) => {
//     console.log(`Category: ${res.textContent}`);
//     console.log(`Elements: ${list[index+1].querySelectorAll('li').length}`);
// })



