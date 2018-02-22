//  submit event
var form = document.getElementById('addform');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');
let newItem = document.getElementById('input-item');
var todos = [];

//  load todo
window.addEventListener('load', function (e) {
  todos = [
    { id: 1, content: 'HTML', completed: false },
    { id: 2, content: 'CSS', completed: false },
    { id: 3, content: 'Javascript', completed: false }
  ];
  makeTodo();
});

//  form submit event
form.addEventListener('submit', addItem);
//  check or delete item
itemList.addEventListener('click', checkItem);
//  filter
filter.addEventListener('keyup', filterItems);

// add item
function addItem(e) {
  if (!newItem.value) return;
  //  prevent initial behavior - submit
  e.preventDefault();

  const newTodo = {
    id: todos.length + 1,
    content: newItem.value,
    completed: false
  };
  todos = todos.concat(newTodo);

  makeTodo();

  //  remove from form
  newItem.value = '';
}

function checkItem(e) {
  // works only for btn
  if (e.target.classList.contains('far')) {
    let li = e.target.parentElement.parentElement;
    itemList.removeChild(li);

    todos = todos.filter(function (todo) {
      return todo.id !== +li.id
    });
    makeTodo();
  }
   
  e.target.classList.toggle('done');
  todos = todos.map(function (item) {
    return item.id === +e.target.id ? Object.assign({}, item, { completed: !item.completed }) : item;
  });
  console.log(todos);
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

//  make Todo
function makeTodo() {
  //  check lis and redraw
  if( itemList.hasChildNodes('li')) {
    document.querySelectorAll('li').forEach(function (item) {
      itemList.removeChild(item);
    });
  }
  todos.forEach(function (item) {
    //  create new li element
    const list = document.createElement('li');
    //  get btn
    const deleteBtn = document.createElement('button');

    //  add class
    list.className = 'list-group-item';
    //  add text node
    list.appendChild(document.createTextNode(item.content));
    list.setAttribute('id', item.id)

    // create del btn
    deleteBtn.className = 'btn';
    deleteBtn.innerHTML = '<i class="far fa-times-circle"></i>';
    //  add deleteBtn to li
    list.appendChild(deleteBtn);
    itemList.appendChild(list);
  });
}
