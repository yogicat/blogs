import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  condition = false;
  buttonName = [
    { name: 'top' },
    { name: 'bottom'},
    { name : 'left'}
  ];

  showTips(target) {
    console.log(target);
  }

  hideTips(target) {
    console.log(target);
  }


}
