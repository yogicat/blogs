var inputTodo = document.getElementById('input-todo');
var listGroup = document.getElementById('todo-list');


var allBtn = document.getElementById('select-all');
var activeBtn = document.getElementById('select-active');
var compeletedBtn = document.getElementById('select-completed');
var showAllBtn = document.getElementById('show-all');
var todos = [];

function makeTodo() {
  var html = '';
  todos.forEach((todo) => {
    html +=
      `<li class="list-group-item">
            <div class="hover-anchor">
              <a class="hover-action text-muted">
                <span class="glyphicon glyphicon-remove-circle pull-right" data-id="${todo.id}"></span>
              </a>
              <label class="i-checks" for="${todo.id}">
                <input type="checkbox" id="${todo.id}" ${todo.completed ? 'checked' : ''}><i></i>
                <span>${todo.content}</span>
              </label>
            </div>
          </li>`;
  });
  listGroup.innerHTML = html;
  console.table(todos);
}

function getTodo(e) {
  if (!this.value || e.keyCode !== 13) return;
  todos = todos.concat({
    id: Math.max.apply(null, todos.map(item => item.id)) + 1,
    content: this.value,
    completed: false
  });
  makeTodo();
  this.value = '';
}

function toggleTodo(e) {
  todos = todos.map(function (todo) {
    return todo.id === +e.target.id ? Object.assign({}, todo, { completed: !todo.completed }) : todo;
  });
  makeTodo();
}

function removeTodo(id) {
  todos = todos.filter(todo => todo.id !== +id);
  makeTodo();
}

function updateTodo(e) {
  if (e.target.classList.contains('glyphicon')) {
    removeTodo(e.target.dataset.id);
  }
}

function allTodo() {
  todos = todos.map(todo => Object.assign({}, todo, {completed: true }));
  makeTodo();
}

// function showTodo() {
//   var listItems = document.getElementsByClassName('list-group-item');
//   var activeTodos = todos.filter(todo => todo.completed == false);
//   activeTodos = activeTodos.map(todo => todo.id);
//   Array.from(listItems).forEach(function (item) {
//     var name = item.firstElementChild.lastElementChild.firstElementChild.id;
//     item.style.display = 'block';
//   })
// }


inputTodo.addEventListener('keyup', getTodo);
listGroup.addEventListener('change', toggleTodo);
listGroup.addEventListener('click', updateTodo);
allBtn.addEventListener('click', allTodo);

activeBtn.addEventListener('click', showTodo);
compeletedBtn.addEventListener('click', showTodo);

window.addEventListener('load', function () {
  todos = [
    { id: 1, content: 'HTML', completed: false },
    { id: 2, content: 'CSS', completed: true },
    { id: 3, content: 'Javascript', completed: false }
  ];
  makeTodo();
});
