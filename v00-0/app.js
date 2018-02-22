var input = document.querySelector('#input-todo');
var todoList = document.querySelector('#todo-list');
var todos = [];

function resetTodo() {
  todoList.innerHTML = '';

  todos.forEach(function (todo) {
  todoList.innerHTML += '<li id="' + todo.id + '">' + todo.content + '</li>';
  });
}


// Arrow function의 매개변수가 하나일 경우, () 생략
input.addEventListener('keyup', e => {
  if (e.keyCode !== 13 || !input.value) return;

  // TODO: id 채번 방법을 다시 한번 생각해 보기!
  todos = todos.concat({ id: todos.length + 1, content: input.value, completed: false });
  input.value = '';

  resetTodo();
});



todoList.addEventListener('click', e => {
  todos = todos.filter(todo => todo.id !== +e.target.id);
  resetTodo();
});


window.addEventListener('load', () => {
  todos = [
    { id: 1, content: 'HTML', completed: false },
    { id: 2, content: 'CSS', completed: true },
    { id: 3, content: 'Javascript', completed: false }
  ];
  // resetTodo(todos);
  resetTodo();
});