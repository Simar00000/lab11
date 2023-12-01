document.addEventListener('DOMContentLoaded', function () {
  const shoppingList = document.getElementById('shopping-list');
  const newItemInput = document.getElementById('newItem');
  const addItemButton = document.getElementById('addItem');

  function addItem() {
    const newItemValue = newItemInput.value.trim();

    if (newItemValue === '') {
      alert('Please enter a valid item.');
      return;
    }

    const listItem = createListItem(newItemValue);
    shoppingList.appendChild(listItem);

    newItemInput.value = '';
    newItemInput.focus();
  }

  function createListItem(itemText) {
    const listItem = document.createElement('li');
    const itemTextElement = document.createElement('span');
    const deleteButton = document.createElement('button');

    listItem.appendChild(itemTextElement);
    listItem.appendChild(deleteButton);

    itemTextElement.textContent = itemText;
    deleteButton.textContent = 'Delete';

    listItem.classList.add('list-item');
    deleteButton.classList.add('delete-button');

    deleteButton.addEventListener('click', function () {
      shoppingList.removeChild(listItem);
    });

    return listItem;
  }

  addItemButton.addEventListener('click', addItem);
});
