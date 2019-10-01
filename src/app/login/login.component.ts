import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { trigger, transition, style, animate, state } from '@angular/animations';
import { Router } from '@angular/router';

import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
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
      state('true', style({ opacity: '0' })),
      state('false', style({ opacity: '1' })),
      transition('false <=> true', animate('.125s')),
    ]),
    trigger('shrinkForm', [
      state('true', style({ height: '0px' })),
      state('false', style({ height: '*' })),
      transition('false <=> true', animate('.25s')),
    ])
  ]
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  isSubmitted = false;
  loggedIn = false;
  formHidden = false;
  
  emailEntered = false;
  passwordEntered = false;
  formSubmitted = false;

  constructor (private authService: AuthService, private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  get formControls() { return this.loginForm.controls; }

  login() {
    this.isSubmitted = true;
    if (this.loginForm.invalid) {
      console.log('Invalid');
      return;
    }
    console.log('Valid');
    this.authService.login(this.loginForm.value);
    this.router.navigateByUrl('admin');
    setTimeout(() => {
      this.loggedIn = true;
      setTimeout(() => {
        this.formHidden = true;
      }, 500);
    }, 500);
  }

  emailCheck() {
    if(this.loginForm.controls.email.errors && this.loginForm.controls.email.errors.required != null) {
      this.passwordEntered = false;
      setTimeout(() => {
        this.emailEntered = false;
      }, 2000);
    } else {
      this.emailEntered = true;
    }
    setTimeout(() => {
      if(this.emailEntered) {
        if(this.loginForm.controls.password.errors && this.loginForm.controls.password.errors.required != null) {
          this.passwordEntered = false;
        } else {
          this.passwordEntered = true;
        }
      }
    }, 500);
    console.log(this.emailEntered);
  }

  passwordCheck() {
    if(this.emailEntered) {
      if(this.loginForm.controls.password.errors && this.loginForm.controls.password.errors.required != null) {
        this.passwordEntered = false;
      } else {
        this.passwordEntered = true;
      }
      console.log(this.passwordEntered);
    }
  }

  loginSumission() {
    if(this.emailEntered && this.passwordEntered) {
      this.formSubmitted = true;
    }
  }

}
