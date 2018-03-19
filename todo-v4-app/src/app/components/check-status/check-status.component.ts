import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-check-status',
  templateUrl: './check-status.component.html',
  styleUrls: ['./check-status.component.scss']
})
export class CheckStatusComponent implements OnInit {
  @Input()
  st: string[];

  @Input()
  selected: string;

  @Output()
  onselected: EventEmitter<any> = new EventEmitter();

  // defaultselected: 'all';
  constructor() { }

  ngOnInit() {
  }

  sendStatus(): void {
    // selected = st;
    this.onselected.emit(this.st);
  }

}
