import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { trigger, transition, style, animate, state } from '@angular/animations';
import { User } from '../../user';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../../auth.service';

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
      state('true', style({ opacity: '0' })),
      state('false', style({ opacity: '1' })),
      transition('false <=> true', animate('.125s')),
    ]),
    trigger('shrinkForm', [
      state('true', style({ height: '0px' })),
      state('false', style({ height: '*' })),
      transition('false <=> true', animate('500ms cubic-bezier(.66,-0.49,1,-0.17)')),
    ])
  ]
})
export class SignupComponent implements OnInit {

  loginForm: FormGroup;
  isSubmitted = false;
  loggedIn = false;
  formHidden = false;
  
  emailEntered = false;
  passwordEntered = false;
  confirmEntered = false;
  formSubmitted = false;

  constructor (private authService: AuthService, private router: Router, private formBuilder: FormBuilder) { }

  ngForm: NgForm;

  // private user: User;
  user: User;
  // private gender: string[];
  gender: string[];

  ngOnInit() {

    this.gender = ['Male', 'Female', 'Others'];

    this.user = new User({
      email: '', password: { pwd: '', confirmPwd: '' }, gender: this.gender[0], terms: false
    });

    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
      confirm: ['', Validators.required]
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
  }

  passwordCheck() {
    if(this.emailEntered) {
      if(this.loginForm.controls.password.errors && this.loginForm.controls.password.errors.required != null) {
        this.passwordEntered = false;
      } else {
        this.passwordEntered = true;
      }
    }
  }

  confirmCheck() {
    if(this.emailEntered && this.passwordEntered) {
      if(this.loginForm.controls.confirm.errors && this.loginForm.controls.confirm.errors.required != null) {
        this.confirmEntered = false;
      } else {
        this.confirmEntered = true;
      }
    }
  }

  loginSumission() {
    if(this.emailEntered && this.passwordEntered) {
      this.formSubmitted = true;
    }
  }

}
