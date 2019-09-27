import { Component, OnInit } from '@angular/core';
import { DateTimeService } from './date-time.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  constructor (private service: DateTimeService, private http: HttpClient) {
    console.log(AppComponent.sval);
    console.log(this.num_val);
    this.storeNum();
    console.log(this.addNumbers(7, 8));
  }

  static sval = 10;

  results = '';
  num_val = 13;

  currentDate = new Date();

  childData: string;
  userStatus: string;

  ngOnInit(): void {
    // this.currentDate = this.service.currentDate;
    console.log(this.currentDate);

    // this.http.get(`https://swapi.co/api/people/?search=ab`).toPromise()
    //   .then((data: any) => {
    //     console.log(data);
    //     this.results = data.results;
    //     console.log(this.results);
    //   });

    // this.http.get('http://api.github.com/users/abdullah').subscribe(data => {
    //   console.log(data);
    // });

    // this.http.get<UserResponse>('https://api.github.com/users/abdullah')
    //   .subscribe(data => {
    //     console.log('User Login: ' + data.login);
    //     console.log('Bio: ' + data.bio);
    //     console.log('Company: ' + data.company);
    //   });

    this.http.get(`http://dummy.restapiexample.com/api/v1/employees`).toPromise()
      .then((data: any) => {
        console.log(data);
        this.results = data.results;
        console.log(this.results);
      }).catch(error => {
        console.log('Promise Error: ' + error);
      }).finally(() => {
        console.log('Manipulate Data Here');
      });

    this.http.get('http://dummy.restapiexample.com/api/v1/employees').subscribe(
      data => {
        console.log(data);
      },
      err => {
        console.log('Subscribe Error: ' + err);
      }
    );

    // this.http.get<UserResponse>('http://dummy.restapiexample.com/api/v1/employees')
    //   .subscribe(data => {
    //     console.log('User Login: ' + data.login);
    //     console.log('Bio: ' + data.bio);
    //     console.log('Company: ' + data.company);
    //   });

    const req = this.http.post('http://jsonplaceholder.typicode.com/posts', {
      title: 'foo',
      body: 'bar',
      usedId: 1
    }).subscribe(
      res => {
        console.log(res);
      },
      err => {
        console.log('Post Error: ' + err);
      });

  }

  storeNum(): void {
    let local_num = 14;
    console.log('local Num:' + local_num);
  }

  addNumbers(a, b): number {
    return a + b;
  }

  catchChildEvent($event) {
    this.childData = $event;
  }

  catchUserStatusEvent($event) {
    this.userStatus = $event;
  }

}
