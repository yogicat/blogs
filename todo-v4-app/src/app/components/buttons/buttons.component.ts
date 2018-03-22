import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss']
})
export class ButtonsComponent implements OnInit {
  @Output()
  toggleAll: EventEmitter<void> = new EventEmitter<void>();

  @Output()
  deleteAll: EventEmitter<void> = new EventEmitter<void>();

  @Input()
  completedNumber: number;

  constructor() { }

  ngOnInit() {
  }

  onToggle(): void {
    this.toggleAll.emit();
  }

  deleteCompleted(): void {
    this.deleteAll.emit();
  }

}
