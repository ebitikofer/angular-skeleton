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
      func: 'javascript:void(0)'
    },
    {
      name: 'Order',
      link: 'order',
      func: 'javascript:void(0)'
    },
    {
      name: 'Add Product',
      link: 'addproduct',
      func: 'javascript:void(0)'
    }
  ];

  ngOnInit() { }

  // catchUserStatusEvent($event) {

  //   this.userStatus = $event;

  // }

}
