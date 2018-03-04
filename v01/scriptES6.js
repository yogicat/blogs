(function IIFE() {
  const inputTodo = document.getElementById('input-todo');
  const listGroup = document.getElementById('todo-list');

  const btnGroup = document.querySelector('.nav');
  const markAll = document.getElementById('chk-allComplete');
  const clearBtn = document.getElementById('btn-removeCompletedTodos');

  let status = 'all';
  let todos = [];

  let filterTodos = function () {
    return todos.filter((todo) => {
      switch (status) {
        case 'all':
          return todo;
          break;
        case 'active':
          return todo.completed === false;
          break;
        case 'completed':
          return todo.completed === true;
          break;
        default:
          return todo;
      }
    });
  };


  let makeTodo = function () {
    let html = '';
    let countTodo = 0;

    filterTodos();
    filterTodos.forEach((todo) => {
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
    countTodo = todos.filter(todo => todo.completed === true);
    document.getElementById('completedTodos').textContent = `${countTodo.length} `;
    document.getElementById('activeTodos').textContent = `${todos.length - countTodo.length}`;
    todos.length - countTodo.length <= 1 ? document.getElementById('activeTodos').nextSibling.nodeValue = ' item left' : 'items left';
  }


  let getTodo = function (e) {
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
    todos = todos.map((todo) => {
      return todo.id === +e.target.id ? Object.assign({}, todo, { completed: !todo.completed }) : todo;
    });
    makeTodo();
  }

  function removeTodo(e) {
    if (e.target.classList.contains('glyphicon')) {
      todos = todos.filter(todo => todo.id !== +e.target.dataset.id);
      makeTodo();
    }
  }

  inputTodo.addEventListener('keyup', getTodo);
  listGroup.addEventListener('change', toggleTodo);
  listGroup.addEventListener('click', removeTodo);

  // 추가 버튼 이벤트
  //  전체완료
  markAll.addEventListener('change', function (e) {
    todos = todos.map(todo => ({ ...todo, completed: this.checked }));
    makeTodo();
  });

  //  toggle status (all, active, completed선택)
  btnGroup.addEventListener('click', function (e) {
    Array.from(this.children).forEach(li => li.removeAttribute('class'));
    e.target.parentNode.classList.add('active');
    status = e.target.parentNode.id;
    makeTodo();
  });

  // remove completed items
  clearBtn.addEventListener('click', function (e) {
    todos = todos.filter(todo => !todo.completed);
    makeTodo();
  });


  window.addEventListener('load', function () {
    todos = [
      { id: 1, content: 'HTML', completed: false },
      { id: 2, content: 'CSS', completed: true },
      { id: 3, content: 'Javascript', completed: false }
    ];
    makeTodo();
  });
}());
