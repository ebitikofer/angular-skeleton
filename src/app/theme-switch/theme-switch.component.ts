import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-theme-switch',
  template: `
  <button (click)="value=1">Theme #1</button><br>
  <button (click)="value=2">Theme #2</button><br>
  <button (click)="value=3">Theme #3</button><br>
  <h5>Current: #{{value}}</h5>

  <hr>
  <div [ngSwitch]="value">
    <div *ngSwitchCase="1">1. Theme - <b>{{value}}</b></div>
    <div *ngSwitchCase="2">2. Theme - <b>{{value}}</b></div>
    <div *ngSwitchCase="3">3. Theme - <b>{{value}}</b></div>
    <div *ngSwitchDefault>Default Theme</div>
  </div><br><br>
  `,
})
export class ThemeSwitchComponent implements OnInit {

  constructor () { }

  ngOnInit() {
  }

}
