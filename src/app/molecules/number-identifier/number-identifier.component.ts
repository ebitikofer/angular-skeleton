import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-number-identifier',
  templateUrl: './number-identifier.component.html',
  styleUrls: ['./number-identifier.component.css']
})
export class NumberIdentifierComponent implements OnInit {

  constructor () { }

  numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  ngOnInit() {
  }

}
