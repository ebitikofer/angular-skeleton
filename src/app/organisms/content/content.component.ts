import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  constructor () { }

  childData: string;
  userStatus: string;

  ngOnInit() {
  }

  catchChildEvent($event) {
    this.childData = $event;
  }

  openNav() {
    document.getElementById("mySidenav").style.width = "100%";
  }
  
  closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }

}
