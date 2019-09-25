import { Component, OnInit } from '@angular/core';
import { DateTimeService } from './date-time.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  constructor (private service: DateTimeService) {
    console.log(AppComponent.sval);
    console.log(this.num_val);
    this.storeNum();
    console.log(this.addNumbers(7, 8));
  }

  static sval = 10;
  num_val = 13;

  currentDate = new Date();

  childData: string;
  userStatus: string;

  ngOnInit() {
    // this.currentDate = this.service.currentDate;
    console.log(this.currentDate);
  }

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
