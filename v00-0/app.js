var input = document.querySelector('#input-todo');
var todoList = document.querySelector('#todo-list');
var todos = [];

function resetTodo(todos) {
  if (document.hasChildNodes('li')) {
    document.querySelectorAll('li').forEach((item) => {
      todoList.removeChild(item);
    });
  }
  todos.forEach((todo, index) => {
    const newTodo = document.createElement('li');
    todoList.appendChild(newTodo);
    newTodo.innerHTML = todo.content;
    newTodo.setAttribute('id', todo.id);
  });
}

input.addEventListener('keyup', (e) => {
  if (e.keyCode !== 13) return;
  if (todos && input.value) {
    const newTodo = {
      id: todos.length + 1,
      content: input.value,
      completed: false
    };
    todos = todos.concat(newTodo);

    resetTodo(todos);
    input.value = '';
  }
});


todoList.addEventListener('click', (e) => {
  todos = todos.filter((todo) => todo.id !== +e.target.getAttribute('id'));
  resetTodo(todos);
});


window.addEventListener('load', () => {
  todos = [
    { id: 1, content: 'HTML', completed: false },
    { id: 2, content: 'CSS', completed: true },
    { id: 3, content: 'Javascript', completed: false }
  ];
  resetTodo(todos);
});

