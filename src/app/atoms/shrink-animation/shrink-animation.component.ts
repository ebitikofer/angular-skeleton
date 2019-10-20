import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate, state } from '@angular/animations';

@Component({
  selector: 'app-shrink-animation',
  templateUrl: './shrink-animation.component.html',
  styleUrls: ['./shrink-animation.component.css'],
  animations: [
    trigger('sectionVisibility', [
      state('false', style({ opacity: '0' })),
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
export class ShrinkAnimationComponent implements OnInit {

  constructor() { }
  
  animationSteps = [false, false, false];

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

}
