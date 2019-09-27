import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor () { }

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

  }

}
