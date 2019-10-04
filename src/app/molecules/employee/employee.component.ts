import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs/Observable';

import { EmployeeService } from '../../employee.service';

export interface Item { text: string; uid: string }
export interface Profile { fname: string, lname: string, uname: string, email: string }

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  
  private itemsCollection: AngularFirestoreCollection<Item>;
  private itemsDocument: AngularFirestoreDocument<Item>;
  private dbFS: AngularFirestore;
  public userDocument: Observable<any[]>;
  public chatItems: Observable<any[]>;

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

  constructor (private employee: EmployeeService, db: AngularFirestore) { 
    // this.userDocument = db.doc<any[]>('users/' + window.sessionStorage.getItem('session_uid').toString()).valueChanges();
    this.chatItems = db.collection('/chats').valueChanges();
    this.itemsCollection = db.collection<Item>('chats');
    this.itemsDocument = db.doc<Item>('chats/0000000000000000');
  }

  ngOnInit() {

  }

  updateProfile() {
    // this.userDocument = this.dbFS.doc<any[]>('users/' + window.sessionStorage.getItem('session_uid')).valueChanges();
  }

  submitChat(event) {
    this.itemsCollection.add({
      text: event.target.value,
      uid: window.sessionStorage.getItem('session_uid')
    });
    // this.itemsDocument.update({chats: FieldValue.arrayUnion("greater_virginia")})
    event.target.value = '';
  }

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
