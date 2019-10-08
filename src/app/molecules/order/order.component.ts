import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  constructor () { }

  ngOnInit() {
  }

  canDeactivate() {
    console.log('i am navigating away');

    // if the editName !== this.user.name
    if (true) {
      return window.confirm('Discard changes?');
    }

    return true;
  }

}
