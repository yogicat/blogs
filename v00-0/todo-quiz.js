// 1
var todos = [
  { id: 3, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 1, content: 'Javascript', completed: false }
];

function getID() {
  return todos.map((item) => {
    return item.id;
  });
}

var ids = getID();
console.log(ids);


// 2
function getMax(arr) {
  // return Math.max(...arr);
  return Math.max.apply(null, arr);
}

function getMin(arr) {
  return Math.min(...arr);
}

console.log(getMax(ids));
console.log(getMin(ids));


// 3
var item = { id: 4, content: 'Test', completed: false };

// function addID(item) {
//   todos.unshift(item);
//   return todos;
// }
// console.log(addID(item));

function addTodo(item) {
  todos = [item].concat(todos);
}
addTodo(item);
console.log(todos);


// 4
function removeID(id) {
  // todos's item.id === 4 이면 삭제
  todos = todos.filter((item) => {
    return item.id !== id;
  });
}
removeID(4);
console.log(todos);


// 5
// Object.assign()
// function completed(id) {
//   todos.forEach(function (item) {
//     if (item.id === id) {
//       item.completed = !item.completed;
//     }
//   });
//   return todos;
// }
// console.log(completed(3));
// console.log(todos);


function reverseCompleted(id) {
  todos = todos.map((item) => {
    return item.id === id ? Object.assign({}, item, { completed: !item.completed }) : item;
  });
}

reverseCompleted(3);
console.log(todos);


// 6
function allCompleted() {
  todos = todos.map((item) => {
    return item.completed === false ? Object.assign({}, item, { completed: true }) : item;
  });
}
allCompleted();
console.log(todos);


// 7
function getCompleted() {
  var count = 0;
  todos.forEach((item) => {
    return item.completed === true ? count++;
  });
  return count;
}

console.log(getCompleted());
