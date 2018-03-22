import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-check-status',
  templateUrl: './check-status.component.html',
  styleUrls: ['./check-status.component.scss']
})
export class CheckStatusComponent implements OnInit {
  @Input()
  currentStatus: string[];

  @Input()
  selected: string;

  @Output()
  onselected: EventEmitter<string[]> = new EventEmitter<string[]>();

  // defaultselected: 'all';
  constructor() { }

  ngOnInit() {
  }

  sendStatus(): void {
    this.onselected.emit(this.currentStatus);
  }

}
