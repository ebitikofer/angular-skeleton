import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-prod',
  templateUrl: './prod.component.html',
  styleUrls: ['./prod.component.css']
})
export class ProdComponent implements OnInit {

  @Input() parentName: string;
  @Input() parentData: string;

  @Output() childEvent = new EventEmitter<string>();

  constructor () { }

  buttonStatus = false;

  public name = 'Khan';

  isAvailable = false;

  ngOnInit() {
  }

  buttonClick(): void {
    console.log('Butt Clicked!');
  }

  buttonDisable(): void {
    this.buttonStatus = !this.buttonStatus;
  }

  onChange(value: string) {
    this.childEvent.emit(value);
  }

  changeAvailability() {
    this.isAvailable = !this.isAvailable;
  }

}
