import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user-status',
  templateUrl: './user-status.component.html',
  styleUrls: ['./user-status.component.css']
})
export class UserStatusComponent implements OnInit {

  @Output() userStatusEvent = new EventEmitter<string>();

  constructor () { }

  ngOnInit() {
  }

  onChange(value: string) {
    this.userStatusEvent.emit(value);
  }

}
