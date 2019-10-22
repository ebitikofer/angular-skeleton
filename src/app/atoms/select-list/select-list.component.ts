import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-select-list',
  templateUrl: './select-list.component.html',
  styleUrls: ['./select-list.component.css']
})
export class SelectListComponent implements OnInit {

  @Input() listTitle: string;
  @Input() listItems: string[];

  public title: string = 'Empty List';
  public list: string[] = ['the', 'list', 'is', 'empty'];
  public currentListItem: string;

  constructor() { }

  ngOnInit() {
    this.title = this.listTitle;
    this.list = this.listItems;
  }

  updateCurrentListItem(incomingListItem) {
    this.currentListItem = incomingListItem;
  }

}
