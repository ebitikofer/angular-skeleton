import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user-status',
  templateUrl: './user-status.component.html',
  styleUrls: ['./user-status.component.css']
})
export class UserStatusComponent implements OnInit {

  @Output() userStatusEvent = new EventEmitter<string>();

  constructor () { }

  isAdmin = true;
  action = 'demote';

  ngOnInit() {
  }

  onChange(value: string) {
    this.userStatusEvent.emit(value);
  }

  elevatePrivileges() {
    this.isAdmin = !this.isAdmin;
    if (this.isAdmin) { this.action = 'demote'; }
    else { this.action = 'elevate' }
  }

}
