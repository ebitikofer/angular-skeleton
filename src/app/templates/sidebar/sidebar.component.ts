import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor (private router: Router) { }

  userStatus: string;

  routes = [
    {
      name: 'Products',
      link: 'products',
      func: 'nothing()'
    },
    {
      name: 'Order',
      link: 'order',
      func: 'nothing()'
    },
    {
      name: 'Add Product',
      link: 'addproduct',
      func: 'nothing()'
    }
  ];

  ngOnInit() { }

  // catchUserStatusEvent($event) {

  //   this.userStatus = $event;

  // }

  nothing() { }

}
