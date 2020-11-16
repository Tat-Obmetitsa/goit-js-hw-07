const inputRef = document.querySelector('#validation-input');
function onInputBlur(event) {
  if (event.currentTarget.value.length === Number(inputRef.dataset.length)) {
    inputRef.classList.add('valid');
  } else {
    inputRef.classList.add('invalid');
  }
}
function onInputFocus() {
  inputRef.removeAttribute('class');
}
inputRef.addEventListener('focus', onInputFocus);
inputRef.addEventListener('blur', onInputBlur);
