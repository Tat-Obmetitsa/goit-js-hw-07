const inputNameRef = document.querySelector("#name-input");
const outputNameRef = document.querySelector("#name-output");
function onInputName(event) {
  if (event.currentTarget.value !== ' ') { outputNameRef.textContent = event.currentTarget.value } else { outputNameRef.textContent = `незнакомец` }

};
inputNameRef.addEventListener('input', onInputName);