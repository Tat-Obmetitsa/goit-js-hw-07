const ingredients = ['Картошка', 'Грибы', 'Чеснок', 'Помидоры', 'Зелень', 'Приправы',];
const listRef = document.querySelector('#ingredients');
ingredients.forEach((item) => {
  const listItemRef = document.createElement('li');
  listItemRef.textContent = item;
  listRef.append(listItemRef);
  console.log(listItemRef);
  console.log(item);
});