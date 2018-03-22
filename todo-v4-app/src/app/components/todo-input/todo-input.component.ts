import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-input',
  templateUrl: './todo-input.component.html',
  styleUrls: ['./todo-input.component.scss']
})
export class TodoInputComponent implements OnInit {
  @Output()
  make: EventEmitter<string> = new EventEmitter<string>();

  content: string;
  constructor() { }

  ngOnInit() {
  }

  onEnter(): void {
    if (!this.content) { return; }
    this.make.emit(this.content);
    this.content = '';
  }
}
