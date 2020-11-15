let counterValueRef = document.querySelector('#value');
let addListenerBtn = document.querySelector('[data-action="increment"]');
let removeListenerBtn = document.querySelector('[data-action="decrement"]');
let counterValue = 0;
addListenerBtn.addEventListener('click', onIncrementClick);
removeListenerBtn.addEventListener('click', onDecrementClick);
function onIncrementClick(event) {
  event = counterValue += 1;
  counterValueRef.textContent = event;
  return event;
}
function onDecrementClick(event) {
  event = counterValue -= 1;
  counterValueRef.textContent = event;
  return event;
}