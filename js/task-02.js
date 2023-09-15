const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const list = document.querySelector('#ingredients')
for (let i = 0; i< ingredients.length; i++) {
const element = ingredients[i];
 const li = document.createElement("li");
 li.textContent = element;
 list.append(li);
}