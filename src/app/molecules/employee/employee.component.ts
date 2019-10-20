import { Component, OnInit } from '@angular/core';

import { EmployeeService } from '../../services/employee.service';

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

  newEmployee = {
    id: '60606',
    employee_name: 'Eric Bitikofer',
    employee_salary: '100001',
    employee_age: '25',
    profile_image: ''
  };

  newEmployeeUpdate = {
    id: '60606',
    employee_name: 'Eric Bitikofer',
    employee_salary: '1000000',
    employee_age: '25',
    profile_image: ''
  };

  employees = ['Eric', 'Dan', 'Steven', 'Rhys', 'Anthony', 'Chris', 'Chelsea', 'Bailee'];

  constructor (private employee: EmployeeService) { }

  ngOnInit() { }

  // createEmployee() {

  //   this.employee.postEmployee(this.newEmployee);

  // }

  // readEmployee(id?: number) {

  //   if (id !== undefined) {
  //     this.employee.getEmployeeByID(id);
  //   } else {
  //     this.employee.getEmployees();
  //   }

  // }

  // updateEmployee(id: number) {

  //   this.employee.putEmployee(id, this.newEmployeeUpdate);

  // }

  // deleteEmployee(id: number) {

  //   this.employee.deleteEmployee(id);

  // }

  // newRandomEmployee() {

  // }

}
