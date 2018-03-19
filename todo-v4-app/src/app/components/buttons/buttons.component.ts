import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss']
})
export class ButtonsComponent implements OnInit {
  @Output()
  toggleAll: EventEmitter<any> = new EventEmitter();

  @Output()
  deleteAll: EventEmitter<any> = new EventEmitter();

  @Input()
  completedNumber: number;

  constructor() { }

  ngOnInit() {
  }

  onToggle() {
    this.toggleAll.emit();
  }

  deleteCompleted() {
    this.deleteAll.emit();
  }

}
