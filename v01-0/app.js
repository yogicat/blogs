//  ver2.0 연습
const todoList = document.getElementById('todo-list');
const inputTodo = document.getElementById('input-todo');
let todos = [];
const navBtns = document.querySelectorAll('.nav > li');
const allBtn = document.getElementById('all');
const activeBtn = document.getElementById('active');
const completedBtn = document.getElementById('completed');
const clearBtn = document.getElementById('btn-removeCompletedTodos');
const markAllBtn = document.querySelector('#chk-allComplete');
let currentStatus = 'all';

function makeTodo() {
  const doneCount = todos.filter(todo => todo.completed).length;
  allBtn.querySelector('.num').textContent = todos.length;
  completedBtn.querySelector('.num').textContent = doneCount;
  document.getElementById('completedTodos').textContent = doneCount;
  activeBtn.querySelector('.num').textContent = todos.length - doneCount;

  const currentTodo = todos.filter(function (todo) {
    switch (currentStatus) {
      case 'all':
        return todo;
        break;
      case 'active':
        return todo.completed === false;  
        break;
      case 'completed':
        return todo.completed === true;
        break;
      default: return todo;
    }
  });

  const html = currentTodo.map((todo) => {
    return `
    <li class="list-group-item">
      <div class="hover-anchor">
        <label class="i-checks" for="${todo.id}">
          <input type="checkbox" id="${todo.id}" ${todo.completed ? 'checked' : ''}><i></i>
          <span class="${todo.completed ? 'checked' : ''}">${todo.content}</span>
        </label>
        <i class="fas fa-times"></i>        
      </div>
    </li>`;
  }).join('');
  todoList.innerHTML = html;
  console.table(todos);
}

function getID() {
  //  todos에 하나도 없으면  1, 아니면 계산
  return todos.length <= 0 ? 1 : Math.max.apply(null, todos.map(todo => todo.id)) + 1;
}

function getTodo(e) {
  if (e.keyCode !== 13 || !this.value) return;
  todos = todos.concat({
    id: getID(),
    content: this.value,
    completed: false
  });
  makeTodo();
  this.value = '';
}

function updateTodo(e) {
  todos = todos.map((todo) => {
    if (todo.id === +e.target.id) {
      return Object.assign({}, todo, { completed: !todo.completed });
    }
    return todo;
  });
  makeTodo();
}

function changeStatus() {
  navBtns.forEach(btn => btn.removeAttribute('class'));
  this.classList.add('active');
  currentStatus = this.id;
  makeTodo();
}

function removeTodo(e) {
  if (e.target.nodeName === 'I') {
    const clickedId = +e.target.previousElementSibling.htmlFor;
    todos = todos.filter(todo => todo.id !== clickedId);
  } else if (e.target.nodeName === 'BUTTON') {
    todos = todos.filter(todo => !todo.completed);
  } else {
    return;
  }
  makeTodo();
}

function markAll() {
  todos = todos.map(todo => Object.assign({}, todo, { completed: this.checked }));
  makeTodo();
}

todoList.addEventListener('change', updateTodo);
todoList.addEventListener('click', removeTodo);
inputTodo.addEventListener('keyup', getTodo);
navBtns.forEach(todo => todo.addEventListener('click', changeStatus));
markAllBtn.addEventListener('change',markAll);
clearBtn.addEventListener('click', removeTodo);
// navGroup.addEventListener('click', changeStatus);
window.addEventListener('load', function () {
  todos = [
    { id: 1, content: 'HTML', completed: false },
    { id: 2, content: 'CSS', completed: true },
    { id: 3, content: 'Javascript', completed: false }
  ];
  makeTodo();
});
