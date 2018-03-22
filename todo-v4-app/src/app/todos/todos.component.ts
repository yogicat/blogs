import { Component, OnInit, OnChanges } from '@angular/core';
import { TodosService } from '../todos.service';
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
    // const newTodo = { id: this.getID(), content, completed: false };
    // this.todosService
    //   .addTodo({ id: this.getID(), content, completed: false })
    //   .subscribe((data: ITodo) => {
    //     this.todos = [...this.todos, data];
    //   });
  }

  constructor(private todosService: TodosService) {}

  ngOnInit() {
    // get todos from db
    // this.todosService.getTodos();
    // console.log(this.todos);
    this.todosService
      .getTodos()
      .subscribe((data: ITodo[]) => {
        
      })
  }

  checkTodo(selectedTodo: ITodo): void {
    this.todosService
      .checkTodo(selectedTodo)
      .subscribe((data: ITodo) => {
        console.log(data);
      });
    // this.todos = this.todos.map(todo => (todo.id === selectedTodo.id ? Object.assign({}, todo, { completed: !todo.completed }) : todo));
  }

  deleteTodo(selectedTodo: ITodo): void {
    this.todos = this.todos.filter(todo => todo.id !== selectedTodo.id);
  }

  toggleAll(): void {
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

  getStatus(status: string): void {
    this.selected = status;
  }


  getCompNum(): number {
    return this.todos.filter(({ completed }) => completed).length;
  }

}
