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

  navOpen = false;

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
      func: 'javascript:void(0)'
    },
    {
      name: 'Order',
      link: 'order',
      func: 'javascript:void(0)'
    },
    {
      name: 'Add',
      link: 'addproduct',
      func: 'javascript:void(0)'
    }
  ];

  constructor (private router: Router) { }

  ngOnInit() { }

  navigateHome() {
    this.router.navigateByUrl('');
  }

  openCloseNav() {

    if (!this.navOpen) {
      document.getElementById("side-bar-mobile").style.width = "100%";
    } else {
      document.getElementById("side-bar-mobile").style.width = "0%";
    }

    this.navOpen = !this.navOpen;

  }

}
