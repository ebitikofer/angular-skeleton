import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { FirebaseAuthService } from '../core/auth.service';
import { Router } from '@angular/router';
import { firestore } from 'firebase/app';
import { map, switchMap } from 'rxjs/operators';
import { Observable, combineLatest, of } from 'rxjs';

import { from } from 'rxjs';

export interface Profile { fname: string; lname: string; uname: string; email: string; }

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(
    private afs: AngularFirestore,
    private auth: FirebaseAuthService,
    private router: Router
  ) { }

  get(chatId) {
    return this.afs
    .collection<any>('chats')
    .doc(chatId)
    .snapshotChanges()
    .pipe(
      map(doc => {
        return { id: doc.payload.id, ...doc.payload.data() };
      })
    );
  }

  getUsers() {
    return this.afs
    .collection<Profile>('users')
    .snapshotChanges()
    .pipe(
      map(actions => actions.map(a => {
        const id = a.payload.doc.id;
        const email = a.payload.doc.data().email;
        return { id, email };
      }))
    );
  }

  async create() {
    // const { uid } = await this.auth.getUser();
    const uid = window.sessionStorage.getItem('session_uid');

    const chat = {
      uid: uid,
      createdAt: Date.now(),
      count: 0,
      messages: []
    };

    const docRef = await this.afs
    .collection<any>('chats')
    .add(chat);

    // return this.router.navigate(['chats', docRef.id]);
  }

  async sendMessage(chatId, text) {
    console.log(chatId);
    // const { uid } = await this.auth.getUser();
    const uid = window.sessionStorage.getItem('session_uid');

    const message = {
      uid: uid,
      text: text,
      createdAt: Date.now(),
    };

    // if (uid) {
      const ref = await this.afs
      .collection<any>('chats')
      .doc(chatId);
      return ref.update({
        messages: firestore.FieldValue.arrayUnion(message)
      });
    // }
  }

  joinUsers(chat$: Observable<any>) {
    let chat;
    const joinKeys = {};

    return chat$.pipe(
      switchMap(c => {
        chat = c;
        const uids = Array.from(new Set(c.messages.map(v => v.uid)));

        const userDocs = uids.map(u =>
          this.afs.doc(`users/${u}`).valueChanges()
        );

        return userDocs.length ? combineLatest(userDocs) : of([]);
      }),
      map(arr => {
        arr.forEach(v => (joinKeys[(<any>v).uid] = v));
        chat.messages = chat.messages.map(v => {
          return { ...v, user: joinKeys[v.uid] };
        });

        return chat;
      })
    );
  }

}
