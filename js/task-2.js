const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];
const listRef = document.querySelector('#ingredients');
const createItem = ingredients.map(item => {
  const listItemRef = document.createElement('li');
  listItemRef.textContent = item;
  return listItemRef;
});
listRef.append(...createItem);