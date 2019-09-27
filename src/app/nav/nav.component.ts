import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  title = 'Lets Learn Angular';
  logo = 'https://cdn.pixabay.com/photo/2017/07/10/19/42/logo-2491236_960_720.png';

  routes = [
    {
      link: 'component1/6/9',
      name: 'Widgets'
    },
    {
      link: 'component2',
      name: 'ToDo'
    },
    {
      link: 'component3',
      name: 'Theme'
    },
    {
      link: 'component4',
      name: 'About'
    }
  ];

  constructor () { }

  ngOnInit() {
  }

}
