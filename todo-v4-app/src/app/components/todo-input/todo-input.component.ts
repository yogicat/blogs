import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-input',
  templateUrl: './todo-input.component.html',
  styleUrls: ['./todo-input.component.scss']
})
export class TodoInputComponent implements OnInit {
  @Output()
  make: EventEmitter<any> = new EventEmitter();

  content: string;
  constructor() { }

  ngOnInit() {
  }

  sendTodo(): void {
    this.make.emit(this.content);
    this.content = '';
  }
}
