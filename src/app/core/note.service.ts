import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { firestore } from 'firebase/app';
import { map, switchMap } from 'rxjs/operators';
import { Observable, combineLatest, of } from 'rxjs';

export interface Notes { todo: string[]; doing: string; done: string[]; }

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  constructor(
    private afs: AngularFirestore
  ) { }

  get(userId) {
    return this.afs
    .collection<any>('notes')
    .doc(userId)
    .snapshotChanges()
    .pipe(
      map(doc => {
        return { id: doc.payload.id, ...doc.payload.data() };
      })
    );
  }

  async createNote(text) {
    const uid = window.sessionStorage.getItem('session_uid');

    // if (uid) {
      const ref = await this.afs
      .collection<any>('notes')
      .doc(uid);
      return ref.update({
        todo: firestore.FieldValue.arrayUnion(text)
      });
    // }
  }

  async updateNotes(todo, doing, done) {
    const uid = window.sessionStorage.getItem('session_uid');

    // get doing

    const ref = await this.afs
    .collection<any>('notes')
    .doc(uid);

    ref.update({
      doing: doing,
      todo: todo,
      done: done
    });
  }

}
