import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-sidebar-routes',
  templateUrl: './sidebar-routes.component.html',
  styleUrls: ['./sidebar-routes.component.css']
})
export class SidebarRoutesComponent implements OnInit {

  @Input() routes;

  constructor() { }

  ngOnInit() { }

}
