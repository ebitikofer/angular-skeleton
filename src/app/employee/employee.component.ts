import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  fname = 'Eric';
  lname = 'Bitikofer';
  ph = '440679751';
  bank = 11985.25;
  rating = 487.9897652;
  info = { height: '5f10i', age: '25', address: { a1: 'Columbus', a2: 'Cleveland' } };
  months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  constructor () { }

  ngOnInit() {
  }

}
