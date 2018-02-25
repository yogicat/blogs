var inputTodo = document.getElementById('input-todo');
var listGroup = document.getElementById('todo-list');
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
              <label class="i-checks" for="1">
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

function updateTodo(e) {
  console.log(e.target);
}

inputTodo.addEventListener('keyup', getTodo);
listGroup.addEventListener('click', updateTodo);

window.addEventListener('load', function () {
  todos = [
    { id: 1, content: 'HTML', completed: false },
    { id: 2, content: 'CSS', completed: true },
    { id: 3, content: 'Javascript', completed: false }
  ];
  makeTodo();
});