import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {

  constructor () { }

  todo = ['clean room', 'wash car', 'practice drums', 'code', 'workout'];

  currentTask = this.todo[0];

  ngOnInit() {
  }

  updateCurrentTask(incomingTask) {
    this.currentTask = incomingTask;
  }

}
