import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor () { }

  currentDate = new Date();
  userStatus: string;

  routes = [
    {
      link: 'products',
      name: 'Products'
    },
    {
      link: 'order',
      name: 'Order'
    },
    {
      link: 'addproduct',
      name: 'Add Product'
    },
    {
      link: 'signup',
      name: 'Signup'
    },
    {
      link: 'login',
      name: 'Login'
    }
  ];

  ngOnInit() {
  }

  catchUserStatusEvent($event) {
    this.userStatus = $event;
  }

}
