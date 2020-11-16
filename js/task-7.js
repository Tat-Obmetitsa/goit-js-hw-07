const inputRef = document.querySelector('#font-size-control');
const textRef = document.querySelector('#text');
inputRef.addEventListener('input', () => {
  textRef.style.fontSize = inputRef.value + 'px';
});

// Второй вариант

// function onChangeFontSizeText(event) {
//   textRef.style.fontSize = `${event.currentTarget.value}px`;
// }
// inputRef.addEventListener("input", onChangeFontSizeText);
