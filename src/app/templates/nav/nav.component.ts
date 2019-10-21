import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  // title = 'Lets Learn Angular';
  title = 'beeblechat';
  logo = 'https://cdn.pixabay.com/photo/2017/07/10/19/42/logo-2491236_960_720.png';

  routesLinks = [
    {
      link: 'component1/6/9',
      name: 'Widgets'
    },
    {
      link: 'component3',
      name: 'Theme'
    },
    {
      link: 'component4',
      name: 'About'
    }
  ];

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

  constructor (private router: Router) { }

  ngOnInit() { }

  navigateHome() {
    this.router.navigateByUrl('');
  }

  openNav() {
    document.getElementById("mySidenav").style.width = "100%";
    document.getElementById("sideNavPad").style.padding = "0px 10px";
  }

  closeNav() {
    document.getElementById("mySidenav").style.width = "0%";
    document.getElementById("sideNavPad").style.padding = "0px 0px";
  }

}
