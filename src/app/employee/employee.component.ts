import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  name = 'Eric';
  ph = '440679751';

  constructor () { }

  ngOnInit() {
  }

}
