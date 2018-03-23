import { Component, ViewChild } from '@angular/core';

import { TooltipDirective } from './tooltip.directive';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  newPosition: string;

  @ViewChild(TooltipDirective)
  set position(directive: TooltipDirective) {
    // this.newPosition = directive
    console.log(directive);
  }

}
