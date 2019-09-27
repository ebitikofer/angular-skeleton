import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor (private http: HttpClient) { }

  getEmployees() {

    this.http.get('http://dummy.restapiexample.com/api/v1/employees').subscribe(
      data => {
        console.log(data);
      },
      err => {
        console.log('Get Error: ' + err);
      }
    );

  }

  getEmployeeByID(id: number) {

    this.http.get('http://dummy.restapiexample.com/api/v1/employee/' + id.toString()).subscribe(
      data => {
        console.log(data);
      },
      err => {
        console.log('Get Error: ' + err);
      }
    );

  }

  postEmployee(employeeRecord) {

    const req = this.http.post('http://dummy.restapiexample.com/api/v1/create', employeeRecord).subscribe(
      res => {
        console.log(res);
      },
      err => {
        console.log('Post Error: ' + err);
      });

  }

  putEmployee(id: number, employeeUpdate) {

    const req = this.http.put('http://dummy.restapiexample.com/api/v1/update' + id.toString(), employeeUpdate).subscribe(
      res => {
        console.log(res);
      },
      err => {
        console.log('Put Error: ' + err);
      });

  }

  deleteEmployee(id: number) {

    this.http.delete('http://dummy.restapiexample.com/api/v1/delete/' + id.toString()).subscribe(
      data => {
        console.log(data);
      },
      err => {
        console.log('Delete Error: ' + err);
      }
    );

  }

}
