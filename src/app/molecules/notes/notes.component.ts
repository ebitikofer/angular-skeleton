import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs/Observable';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

export interface Item { text: any; }

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {

  private itemsCollection: AngularFirestoreCollection<Item>;
  private itemsDocument: AngularFirestoreDocument<Item>;
  private dbFS: AngularFirestore;
  public profileItems: Observable<any[]>;
  public chatItems: Observable<any[]>;

  constructor (db: AngularFirestore) { 
    this.chatItems = db.collection('/notes').valueChanges();
    this.itemsCollection = db.collection<Item>('notes');
    this.itemsDocument = db.doc<Item>('notes/0000000000000000');
  }

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

  submitTask(event) {
    this.itemsCollection.add({text: event.target.value});
    // this.itemsDocument.update({chats: FieldValue.arrayUnion("greater_virginia")})
    event.target.value = '';
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
