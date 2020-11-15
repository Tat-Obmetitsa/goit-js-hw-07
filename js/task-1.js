const categoryRef = document.querySelector('#categories');

const itemsNumberRef = `В списке ${categoryRef.children.length} категории.`;
console.log(itemsNumberRef);

const itemsCategoriesRef = document.querySelectorAll('.item');

itemsCategoriesRef.forEach((item) =>
  console.log(`Категория: ${item.querySelector('h2').textContent}
Количество элементов: ${item.querySelector('ul').children.length}`)
);