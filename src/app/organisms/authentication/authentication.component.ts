import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate, state } from '@angular/animations';
import { Router } from '@angular/router';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css'],
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
export class AuthenticationComponent implements OnInit {

  constructor (private router: Router) { }

  currentDate = new Date();
  userStatus: string;

  loginAnimationSteps = [false, false, false];
  signupAnimationSteps = [false, false, false];
  profileAnimationSteps = [false, false, false];

  authData: string;
  loggedIn = false;

  ngOnInit() { }

  openComponent(stepFlags) {

    console.log("Open profile component");

    setTimeout(() => {
      this.closeComponent(stepFlags[0], 500);
      this.closeComponent(stepFlags[1], 500);


      stepFlags[2][2] = true;
      setTimeout(() => {
        stepFlags[2][1] = true;
        setTimeout(() => {
          stepFlags[2][0] = true;
        }, 500);
      }, 500);


    }, 1000);

  }

  closeComponent(componentStepFlags, commonStepTime) {

    console.log('Close component');

    setTimeout(() => {
      componentStepFlags[1] = false;
      setTimeout(() => {
        componentStepFlags[0] = false;
        setTimeout(() => {
          componentStepFlags[2] = false;
        }, commonStepTime);
      }, commonStepTime);
    }, commonStepTime);

  }

  catchChildEvent($event) {

    this.authData = $event;

    if(this.authData == 'authed') {
      this.openComponent([this.loginAnimationSteps, this.signupAnimationSteps, this.profileAnimationSteps]);
    }

    setTimeout(() => {
      this.loggedIn = true;
      this.router.navigateByUrl('/notes');
    }, 5000);

  }

}
