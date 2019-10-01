import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

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

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.movies, event.previousIndex, event.currentIndex);
  }

}
