// import { Component, OnInit } from '@angular/core';
// import { FormGroup, FormBuilder, Validators } from '@angular/forms';
// import { trigger, transition, style, animate, state } from '@angular/animations';
// import { User } from '../../models/user';
// import { NgForm } from '@angular/forms';
// import { Router } from '@angular/router';

import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { trigger, transition, style, animate, state } from '@angular/animations';
import { Router } from '@angular/router';

import { AuthService } from '../../core/old-auth.service';
import { FirebaseAuthService } from '../../core/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  animations: [
    trigger('dotFill', [
      state('true', style({ backgroundColor: '#009420' })),
      state('false', style({ backgroundColor: '#940000' })),
      transition('false <=> true', animate('.5s'))
    ]),
    trigger('lineFill', [
      state('true', style({ backgroundColor: '#009420' })),
      state('false', style({ backgroundColor: '#940000' })),
      transition('false <=> true', animate('.125s'))
    ]),
    trigger('hideForm', [
      state('true', style({ opacity: '1' })),
      state('false', style({ opacity: '1' })),
      transition('false <=> true', animate('.125s')),
    ]),
    trigger('shrinkForm', [
      state('true', style({ height: '0px', transform: 'translateX(-100%)' })),
      state('false', style({ height: '*', transform: 'translateX(0%)' })),
      transition('false <=> true', animate('500ms cubic-bezier(.66,-0.49,1,-0.17)')),
    ])
  ]
})
export class SignupComponent implements OnInit {


  @Output() childEvent = new EventEmitter<string>();

  signupForm: FormGroup;
  isSubmitted = false;
  loggedIn = false;
  formHidden = false;

  emailEntered = false;
  passwordEntered = false;
  confirmEntered = false;
  formSubmitted = false;

  constructor (
    private authService: AuthService,
    private auth: FirebaseAuthService,
    private router: Router,
    private formBuilder: FormBuilder
    ) { }

  ngOnInit() {
    this.signupForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
      confirm: ['', Validators.required]
    });
  }

  get formControls() { return this.signupForm.controls; }

  signup() {
    this.isSubmitted = true;
    if (this.signupForm.invalid) {
      console.log('Invalid');
      return;
    }
    console.log('Valid');
    this.authService.login(this.signupForm.value);
    // this.router.navigateByUrl('admin');
    setTimeout(() => {
      this.loggedIn = true;
      setTimeout(() => {
        this.formHidden = true;
      }, 500);
    }, 500);
  }

  async signupSumission() {
    if (this.emailEntered && this.passwordEntered && (this.signupForm.controls.password.value == this.signupForm.controls.confirm.value)) {
      console.log('Attempting Auth...');
      console.log('Initial: ', this.auth.isAuthenticated);   
      await this.auth.emailSignup(this.signupForm.controls.email.value, this.signupForm.controls.password.value)
      console.log('Final: ', this.auth.isAuthenticated);      
      if (this.auth.isAuthenticated) {
        this.formSubmitted = true;
        this.childEvent.emit('authed');
      }
      // this.afterAuthAnimation();
    }
  }

  afterAuthAnimation() {
    this.emailEntered = true;
    setTimeout(() => {
      this.passwordEntered = true;
      setTimeout(() => {
        this.confirmEntered = true;
        setTimeout(() => {
          this.formSubmitted = true;
          setTimeout(() => {
            this.childEvent.emit('authed');
            // setTimeout(() => {
            //   this.formHidden = true;
            // }, 1500);
          }, 1500);
        }, 500);
      }, 500);
    }, 500);
    this.childEvent.emit('authed');
  }

  // private afterSignIn(): void {
  //   // Do after signup stuff here, such router redirects, toast messages, etc.
  //   this.router.navigate(['/notes']);
  // }

  emailCheck() {
    if (this.signupForm.controls.email.errors && this.signupForm.controls.email.errors.required != null) {
      this.passwordEntered = false;
      setTimeout(() => {
        this.emailEntered = false;
      }, 2000);
    } else {
      this.emailEntered = true;
    }
    setTimeout(() => {
      if (this.emailEntered) {
        if (this.signupForm.controls.password.errors && this.signupForm.controls.password.errors.required != null) {
          this.passwordEntered = false;
        } else {
          this.passwordEntered = true;
        }
      }
    }, 500);
    console.log(this.emailEntered);
  }

  passwordCheck() {
    if (this.emailEntered) {
      if (this.signupForm.controls.password.errors && this.signupForm.controls.password.errors.required != null) {
        this.passwordEntered = false;
      } else {
        this.passwordEntered = true;
      }
      console.log(this.passwordEntered);
    }
  }

  confirmCheck() {
    if (this.emailEntered && this.passwordEntered) {
      if (this.signupForm.controls.confirm.errors && this.signupForm.controls.confirm.errors.required != null) {
        this.confirmEntered = false;
      } else {
        this.confirmEntered = true;
      }
      console.log(this.confirmEntered);
    }
  }

  // loginForm: FormGroup;
  // isSubmitted = false;
  // loggedIn = false;
  // formHidden = false;
  
  // emailEntered = false;
  // passwordEntered = false;
  // confirmEntered = false;
  // formSubmitted = false;

  // constructor (private authService: AuthService, private router: Router, private formBuilder: FormBuilder) { }

  // ngForm: NgForm;

  // // private user: User;
  // user: User;
  // // private gender: string[];
  // gender: string[];

  // ngOnInit() {

  //   this.gender = ['Male', 'Female', 'Others'];

  //   this.user = new User({
  //     email: '', password: { pwd: '', confirmPwd: '' }, gender: this.gender[0], terms: false
  //   });

  //   this.loginForm = this.formBuilder.group({
  //     email: ['', Validators.required],
  //     password: ['', Validators.required],
  //     confirm: ['', Validators.required]
  //   });

  // }

  // get formControls() { return this.loginForm.controls; }

  // login() {
  //   this.isSubmitted = true;
  //   if (this.loginForm.invalid) {
  //     console.log('Invalid');
  //     return;
  //   }
  //   console.log('Valid');
  //   this.authService.login(this.loginForm.value);
  //   this.router.navigateByUrl('admin');
  //   setTimeout(() => {
  //     this.loggedIn = true;
  //     setTimeout(() => {
  //       this.formHidden = true;
  //     }, 500);
  //   }, 500);
  // }

  // emailCheck() {
  //   if(this.loginForm.controls.email.errors && this.loginForm.controls.email.errors.required != null) {
  //     this.passwordEntered = false;
  //     setTimeout(() => {
  //       this.emailEntered = false;
  //     }, 2000);
  //   } else {
  //     this.emailEntered = true;
  //   }
  //   setTimeout(() => {
  //     if(this.emailEntered) {
  //       if(this.loginForm.controls.password.errors && this.loginForm.controls.password.errors.required != null) {
  //         this.passwordEntered = false;
  //       } else {
  //         this.passwordEntered = true;
  //       }
  //     }
  //   }, 500);
  // }

  // passwordCheck() {
  //   if(this.emailEntered) {
  //     if(this.loginForm.controls.password.errors && this.loginForm.controls.password.errors.required != null) {
  //       this.passwordEntered = false;
  //     } else {
  //       this.passwordEntered = true;
  //     }
  //   }
  // }

  // confirmCheck() {
  //   if(this.emailEntered && this.passwordEntered) {
  //     if(this.loginForm.controls.confirm.errors && this.loginForm.controls.confirm.errors.required != null) {
  //       this.confirmEntered = false;
  //     } else {
  //       this.confirmEntered = true;
  //     }
  //   }
  // }

  // loginSumission() {
  //   if(this.emailEntered && this.passwordEntered) {
  //     this.formSubmitted = true;
  //   }
  // }

}
