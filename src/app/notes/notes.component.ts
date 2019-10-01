import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {

  constructor () { }

  todo = ['clean room', 'wash car', 'practice drums', 'code', 'workout'];

  doing = ['empty'];

  done = [
    'Get to work',
    'Pick up groceries',
    'Go home',
    'Fall asleep',
    'Get up',
    'Brush teeth',
    'Take a shower',
    'Check e-mail',
    'Walk dog'
  ];

  currentTask = this.todo[0];

  ngOnInit() {
  }

  updateCurrentTask(incomingTask) {
    this.currentTask = incomingTask;
  }
  
  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
  }

  dropInDoing(event: CdkDragDrop<string[]>) {
    console.log(event.item.element.nativeElement.innerText);
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
    this.doing.forEach((item, index) => {
      if(item != event.item.element.nativeElement.innerText) {
        this.done.unshift(item);
        this.doing.splice(index);
      }
    });
  }

}
