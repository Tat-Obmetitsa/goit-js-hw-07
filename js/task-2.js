const ingredients = ['Картошка', 'Грибы', 'Чеснок', 'Помидоры', 'Зелень', 'Приправы',];
const listRef = document.querySelector('#ingredients');
const createItem = item => {
  const listItemRef = document.createElement('li');
  let listItemRef = document.createElement('li');
  listItemRef.textContent = item;
  listRef.appendChild(listItemRef);
  return createItem;
}
ingredients.map(item => createItem(item));
