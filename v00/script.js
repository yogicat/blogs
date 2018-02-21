//  submit event
var form = document.getElementById('addform');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');

//  form submit event
form.addEventListener('submit', addItem);
//  check or delete item
itemList.addEventListener('click', checkItem);

//filter
filter.addEventListener('keyup', filterItems);

// add item
function addItem(e) {
  //  prevent initial behavior
  e.preventDefault();
  //  get input
  let newItem = document.getElementById('item');
  //  create new li element
  const list = document.createElement('li');
  //  get btn
  const deleteBtn = document.createElement('button');

  if (!newItem.value) return;
  //  add class
  list.className = 'list-group-item';

  //  add text node
  list.appendChild(document.createTextNode(newItem.value));

  // create del btn
  deleteBtn.className = 'btn';
  deleteBtn.innerHTML = '<i class="far fa-times-circle"></i>';

  //  add deleteBtn to li
  list.appendChild(deleteBtn);

  //  add li to itemList UL
  itemList.appendChild(list);

  //  remove from form
  newItem.value = '';
}

function checkItem(e) {
  // works only for btn
  if (e.target.classList.contains('far')) {
    let li = e.target.parentElement.parentElement;
    itemList.removeChild(li);
  }
  e.target.classList.add('done');
}

//  filter items
function filterItems(e) {
  //  convers lowercase
  var text = e.target.value.toLowerCase();
  var items = itemList.getElementsByTagName('li');
  // html collection to array
  Array.from(items).forEach((item) => {
    var itemName = item.firstChild.textContent;
    //  compare item text = value
    if (itemName.toLowerCase().indexOf(text) !== -1) {
      // when match
      item.style.display = 'flex';
    } else {
      item.style.display = 'none';
    }
  });
}
