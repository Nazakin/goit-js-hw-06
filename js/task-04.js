const counter = document.getElementById("counter");
const valueSpan = document.getElementById("value");
const incrementButton = counter.querySelector('[data-action="increment"]');
const decrementButton = counter.querySelector('[data-action="decrement"]');

let counterValue = 0;
incrementButton.addEventListener("click", () => {
  counterValue += 1;
  updateValue();
});
decrementButton.addEventListener("click", () => {
  counterValue -= 1;
  updateValue();
});
function updateValue() {
  valueSpan.textContent = counterValue;
};
