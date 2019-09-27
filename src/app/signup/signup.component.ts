import { Component, OnInit } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor () { }

  private user: User;
  private gender: string[];

  ngOnInit() {

    this.gender = ['Male', 'Female', 'Others'];

    this.user = new User({
      email: '', password: { pwd: '', conformPwd: '' }, gender: this.gender[0], terms: false
    });

  }

}
