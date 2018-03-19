import { Component, OnInit } from '@angular/core';
import { ITodo } from '../model/todo.interface';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {
  title = 'my todo v4';
  todos: ITodo[];
  status = ['all', 'active', 'completed'];
  selected = 'all';
  checkStatus = false;

  getID(): number {
    return this.todos.length ? Math.max(... this.todos.map(todo => todo.id)) + 1 : 1;
  }
  makeTodo(content: string): void {
    this.todos = [...this.todos, { id: this.getID(), content, completed: false }];
  }

  ngOnInit() {
    this.todos = [
      {
        id: 1,
        content: 'javascript',
        completed: true
      },
      {
        id: 2,
        content: 'angular2',
        completed: false
      },
      {
        id: 3,
        content: 'english',
        completed: true
      }
    ];
  }

  checkTodo(selectedTodo: ITodo): void {
    this.todos = this.todos.map(todo => (todo.id === selectedTodo.id ? Object.assign({}, todo, { completed: !todo.completed }) : todo));
  }

  deleteTodo(selectedTodo: ITodo): void {
    this.todos = this.todos.filter(todo => todo.id !== selectedTodo.id);
  }


  toggleAll() {
    this.checkStatus = !this.checkStatus;
    this.todos = this.todos.map(todo => Object.assign({}, todo, { completed: this.checkStatus }));
  }
  deleteCompleted(): void {
    this.todos = this.todos.filter(({ completed }) => !completed);
  }
  completedNumber(): number {
    // return this.todos.filter(todo => todo.completed === true).length;
    return this.todos.filter(({ completed }) => completed).length;
  }

  getStatus(status) {
    this.selected = status;
  }


  getCompNum(): number {
    return this.todos.filter(({ completed }) => completed).length;
  }

}
