import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate, state } from '@angular/animations';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  animations: [
    trigger('sectionVisibility', [
      state('false', style({ opacity: '0' })),
      state('true', style({ opacity: '1' })),
      transition('true <=> false', animate('.125s')),
    ]),
    trigger('sectionHeight', [
      state('false', style({ height: '0px' })),
      state('true', style({ height: '*' })),
      transition('true <=> false', animate('.25s')),
    ])
  ]
})
export class SidebarComponent implements OnInit {

  constructor () { }

  currentDate = new Date();
  userStatus: string;

  loginState = false;
  signupState = false;
  profileState = false;

  loginHeight = false;
  signupHeight = false;
  profileHeight = false;

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
      this.signupState = false;
      this.profileState = false;
      setTimeout(() => {
        this.signupHeight = false;
        this.profileHeight = false;
        setTimeout(() => {
          this.loginHeight = true;
          setTimeout(() => {
            this.loginState = true;
          }, 500);
        }, 500);
      }, 500);
    }, 500);
    
  }

  openSignup() {
    console.log("Open signup component");

    setTimeout(() => {
      this.loginState = false;
      this.profileState = false;
      setTimeout(() => {
        this.loginHeight = false;
        this.profileHeight = false;
        setTimeout(() => {
          this.signupHeight = true;
          setTimeout(() => {
            this.signupState = true;
          }, 500);
        }, 500);
      }, 500);
    }, 500);

  }

  openProfile() {
    console.log("Open profile component");

    setTimeout(() => {
      this.loginState = false;
      this.signupState = false;
      setTimeout(() => {
        this.loginHeight = false;
        this.signupHeight = false;
        setTimeout(() => {
          this.profileHeight = true;
          setTimeout(() => {
            this.profileState = true;
          }, 500);
        }, 500);
      }, 500);
    }, 500);

  }

  nothing(){

  }

}
