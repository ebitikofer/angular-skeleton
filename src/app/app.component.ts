import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  constructor () {
    console.log(AppComponent.sval);
    console.log(this.num_val);
    this.storeNum();
    console.log(this.addNumbers(7, 8));
  }

  static sval = 10;
  num_val = 13;

  childData: string;
  userStatus: string;

  storeNum(): void {
    let local_num = 14;
    console.log('local Num:' + local_num);
  }

  addNumbers(a, b): number {
    return a + b;
  }

  catchChildEvent($event) {
    this.childData = $event;
  }

  catchUserStatusEvent($event) {
    this.userStatus = $event;
  }

}
