import axios from 'axios';

(function () {
  let todos = [];
  let status = 'all';

  const inputTodo = document.getElementById('input-todo');
  const todoList = document.getElementById('todo-list');

  // V2
  // filtering
  const filterTodosByStatus = function () {
    return todos.filter(({ completed }) => {
      switch (status) {
        case 'active':
          return !completed; // completed === false
        case 'completed':
          return completed; // completed === true
        default:
          return true; // all
      }
    });
  };

  const countCompletedTodos = function () {
    return todos.filter(todo => todo.completed).length;
  };

  const countLeftTodos = function () {
    return todos.filter(todo => !todo.completed).length;
  };

  const renderTodos = function () {
    let html = '';

    const _todos = filterTodosByStatus();

    _todos.forEach(({ id, content, completed }) => {
      const checked = completed ? 'checked' : '';
      html += `<li class="list-group-item">
      <div class="hover-anchor">
        <a class="hover-action text-muted">
          <span class="glyphicon glyphicon-remove-circle pull-right" data-id="${id}"></span>
        </a>
        <label class="i-checks" for="${id}">
          <input type="checkbox" id="${id}" ${checked}><i></i>
          <span>${content}</span>
        </label>
      </div>
    </li>`;
    });

    todoList.innerHTML = html;

    document.getElementById('completedTodos').innerHTML = countCompletedTodos();
    document.getElementById('activeTodos').innerHTML = countLeftTodos();
  };

  const generateTodoId = function () {
    return todos.length > 0 ? Math.max(...todos.map(({ id }) => id)) + 1 : 1;
  };

  const getTodos = function () {
    // 서버로부터 todos를 취득(잠정 처리)
    axios.get('/todos')
      .then(({ data }) => {
        todos = data;
        renderTodos();
        console.log('[GET]\n', todos);
      })
      .catch(err => console.log(err.response));
  };

  const addTodo = function (content) {
    axios.post('/todos', {
      id: generateTodoId(),
      content: content,
      completed: false
    })
      .then(({ data }) => {
        // todos = [{ id: generateTodoId(), content, completed: false }, ...todos];
        // todos = data;
        getTodos();
        // renderTodos();
        console.log('[ADD]\n', todos);
      })
      .catch(err => console.log(err));
  };

  const removeTodo = function (id) {
    axios.delete(`/todos/id/${id}`)
      .then(({ data }) => {
        getTodos();
        // todos = todos.filter(todo => todo.id !== +id);
        // renderTodos();
        console.log('[REMOVE]\n', todos);
      })
      .catch(err => console.log(err));
  };

  const toggleTodoComplete = function (id) {
    axios.patch(`/todos/id/${id}`, { completed: !todos.find(todo => todo.id === +id).completed }) // payload: { completed }
      .then(({ data }) => {
        // renderTodos();
        // todos = todos.map(todo => (todo.id === +id ? Object.assign({}, todo, { completed: !todo.completed }) : todo));
        getTodos();
        console.log('[TOGGLE-COMP]\n', todos);
      })
      .catch(err => console.log(err));
  };

  const toggleTodoAllComplete = function (chkStatus) {
    axios.patch('/todos', { completed: chkStatus }) // payload: { completed }
      .then(({ data }) => {
        getTodos();
        console.log('[ALL-COMP]\n', todos);
      })
      .catch(err => console.log(err));
    // todos = todos.map(todo => Object.assign({}, todo, { completed: chkStatus }));
    // renderTodos();
  };

  const removeCompletedTodo = function () {
    axios.delete('/todos/completed')
      .then(({ data }) => {
        // todos = todos.filter(todo => !todo.completed);
        // renderTodos();
        console.log('[REMOVE-COMP]\n', todos);
        getTodos();
      })
      .catch(err => console.log(err));

  };

  // load 이벤트는 모든 리소스(image, script, css 등)의 로드가 완료하면 발생한다.
  window.addEventListener('load', getTodos);

  inputTodo.addEventListener('keyup', e => {
    if (e.keyCode !== 13 || !inputTodo.value) return;
    addTodo(inputTodo.value);
    inputTodo.value = '';
  });

  todoList.addEventListener('change', e => toggleTodoComplete(e.target.id));

  todoList.addEventListener('click', e => {
    if (!e.target || e.target.nodeName !== 'SPAN' || e.target.parentNode.nodeName === 'LABEL') return;
    removeTodo(e.target.dataset.id);
  });

  // V2
  // this를 사용하므로 arrow function을 사용 불가
  document.querySelector('.nav').addEventListener('click', function (e) {
    if (!e.target || e.target.nodeName !== 'A') return;

    // 모든 .nav > li 요소에서 active 클래스 제거
    [...this.childNodes].forEach(nav => {
      // Skip text node
      if (nav.nodeName === 'LI') {
        nav.classList.remove('active');
      }
    });

    // 클릭된 a 요소의 부모 요소(.nav > li)에 active 클래스 추가
    const selectedNav = e.target.parentNode;
    selectedNav.classList.add('active');

    status = selectedNav.id;
    renderTodos();
  });

  document.getElementById('chk-allComplete').addEventListener('change', e => {
    toggleTodoAllComplete(e.target.checked);
  });

  // 완료된 todo를 일괄 제거
  document.getElementById('btn-removeCompletedTodos').addEventListener('click', () => {
    removeCompletedTodo();
  });

// axios get
  // axios.get('/todos')
  //   .then(({ data }) => {
  //     todos = data;
  //     console.log('[GET]\n', todos);
  //   })
  //   .catch(err => console.log(err.response));
}(axios));
