import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate, state } from '@angular/animations';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  animations: [
    trigger('sectionVisibility', [
      state('false', style({ opacity: '1' })),
      state('true', style({ opacity: '1' })),
      transition('true <=> false', animate('.06125s')),
    ]),
    trigger('sectionHeight', [
      state('false', style({ height: '0px', transform: 'translateX(-150%)' })),
      state('true', style({ height: '*', transform: 'translateX(0%)' })),
      transition('true <=> false', animate('.06125s')),
    ])
  ]
})
export class SidebarComponent implements OnInit {

  constructor (private router: Router) { }

  currentDate = new Date();
  userStatus: string;

  loginState = false;
  signupState = false;
  profileState = false;

  loginHeight = false;
  signupHeight = false;
  profileHeight = false;

  loginExists = false;
  signupExists = false;
  profileExists = false;

  authData: string;
  loggedIn = false;

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
    },
    // {
    //   name: 'Login',
    //   link: '',
    //   func: 'openLogin()'
    // },
    // {
    //   name: 'Signup',
    //   link: '',
    //   func: 'openSignup()'
    // }
  ];

  ngOnInit() {
  }

  catchUserStatusEvent($event) {
    this.userStatus = $event;
  }

  openLogin() {
    console.log("Open login component");
    setTimeout(() => {
      this.closeSignup();
      this.closeProfile();
      this.loginExists = true;
      setTimeout(() => {
        this.loginHeight = true;
        setTimeout(() => {
          this.loginState = true;
        }, 500);
      }, 500);
    }, 1000);
  }

  closeLogin() {
    console.log("Close login component");
    setTimeout(() => {
      this.loginHeight = false;
      setTimeout(() => {
        this.loginState = false;
        setTimeout(() => {
          this.loginExists = false;
        }, 500);
      }, 500);
    }, 500);
  }

  openSignup() {
    console.log("Open signup component");
    setTimeout(() => {
      this.closeLogin();
      this.closeProfile();
      this.signupExists = true;
      setTimeout(() => {
        this.signupHeight = true;
        setTimeout(() => {
          this.signupState = true;
        }, 500);
      }, 500);
    }, 1000);
  }

  closeSignup() {
    console.log("Close signup component");
    setTimeout(() => {
      this.signupHeight = false;
      setTimeout(() => {
        this.signupState = false;
        setTimeout(() => {
          this.signupExists = false;
        }, 500);
      }, 500);
    }, 500);
  }

  openProfile() {
    console.log("Open profile component");
    setTimeout(() => {
      this.closeLogin();
      this.closeSignup();
      this.profileExists = true;
      setTimeout(() => {
        this.profileHeight = true;
        setTimeout(() => {
          this.profileState = true;
        }, 500);
      }, 500);
    }, 1000);
  }

  closeProfile() {
    console.log("Close profile component");
    setTimeout(() => {
      this.profileHeight = false;
      setTimeout(() => {
        this.profileState = false;
        setTimeout(() => {
          this.profileExists = false;
        }, 500);
      }, 500);
    }, 500);
  }

  catchChildEvent($event) {
    this.authData = $event;
    if(this.authData == 'authed') {
      this.openProfile();
    }
    setTimeout(() => {
      this.loggedIn = true;
      this.router.navigateByUrl('/notes');
    }, 5000);
  }

  nothing(){

  }

}
