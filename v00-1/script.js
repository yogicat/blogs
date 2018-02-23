//  선생님과 함께하는 시간
//  할일의 추가
var inputTodo = document.getElementById('input-todo');
var todoList = document.getElementById('todo-list');
var todos = [];

function getID() {
  return todos.length ? Math.max.apply(null, todos.map(function (todo) {
    return todo.id+1;
  })) : 1;
}

function addTodo(content) {
  todos = todos.concat({ id: getID(), content, completed: false });
}

function render() {
  if (!todos.length) {
    todoList.innerHTML = '';
    return;
  }

  var html = '';

  todos.forEach(function (todo) {
    var checked = todo.completed ? 'checked' : '';
    html += '<li id="' + todo.id + '"><input type="checkbox" class="check"' + checked + '>' + todo.content + '<button class="delete">-</button>';
  })
  todoList.innerHTML = html;
  console.dir(todos);
}

function removeTodo(id) {
  todos = todos.filter(function (todo) {
    return todo.id !== +id;
  });
}

function toggleTodo(id) {
  todos = todos.map(function (todo) {
    return todo.id === +id ? Object.assign({}, todo, { completed: !todo.completed }) : todo;
  });
  // render();
  // console.log(todos);
}

window.addEventListener('load', function () {
  //  database server 에서 todos 배열을 가져온다
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'http://localhost:3000/todos');
  xhr.send();

  xhr.onreadystatechange = function () {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      if (xhr.status === 200) {
        console.log(xhr.responseText);
        todos = JSON.parse(xhr.responseText);
        render();
      } else {
        console.log(xhr.statusText);
      }
    }
  };

  // todos =[
  //   { id: 1, content: 'HTML', completed: false },
  //   { id: 2, content: 'CSS', completed: true },
  //   { id: 3, content: 'Javascript', completed: false }
  // ];

  // render();

});

inputTodo.addEventListener('keyup', function (e) {
  if (e.keyCode !== 13 || !this.value) return;

  addTodo(this.value);
  render();
  this.value = '';
})


todoList.addEventListener('click', function (e) {
  //e.target 실제로 발생시킨애
  //e.currentTarget = this 와 같다.
  if (e.target && e.target.nodeName === 'BUTTON') {
    removeTodo(e.target.parentNode.id);
  } else if (e.target.nodeName === 'LI') {
    toggleTodo(e.target.parentNode.id);
  }
  render();
});