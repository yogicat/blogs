import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { ITodo } from '../../model/todo.interface';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  @Input()
  todo: ITodo;

  @Output()
  checks: EventEmitter<any> = new EventEmitter();

  @Output()
  delete: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onCheck(): void {
    this.checks.emit(this.todo);
  }

  onDelete(): void {
    this.delete.emit(this.todo);
  }

}
