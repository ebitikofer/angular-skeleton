import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable, Subject} from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { ChatService } from '../../core/chat.service';

export interface Item { text: string; uid: string; timestamp: any; }
export interface Profile { fname: string; lname: string; uname: string; email: string; }
export interface UserChat { chat: string; users: string[]; }

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  private itemsCollection: AngularFirestoreCollection<Item>;
  private usersChatsCollection: AngularFirestoreCollection<Item>;
  private itemsDocument: AngularFirestoreDocument<Item>;
  private dbFS: AngularFirestore;
  public userDocument: Observable<any[]>;
  public usersChats: Observable<any[]>;
  public chatItems: Observable<any[]>;
  public chat$: Observable<any>;
  public users$: Observable<any>;

  currentEmail = '';
  currentUid = '';
  chatId = '0';
  chatFound = false;

  constructor (private db: AngularFirestore, public chat: ChatService) { 
    // this.userDocument = db.doc<any[]>('users/' + window.sessionStorage.getItem('session_uid').toString()).valueChanges();
    this.chatItems = db.collection('/chats').valueChanges();
    this.usersChatsCollection = db.collection('/users-chats');
    this.itemsCollection = db.collection<Item>('chats');
    this.itemsDocument = db.doc<Item>('chats/0000000000000000');
  }

  ngOnInit() {
    // const source = this.chat.get('0');
    // this.chat$ = this.chat.joinUsers(source);
    this.currentUid = sessionStorage.getItem('session_uid');
    this.currentEmail = sessionStorage.getItem('session_email');
    console.log('Loading Users...');
    this.users$ = this.chat.getUsers();
    this.chat$ = this.chat.get('0');
  }

  updateProfile() {
    // this.userDocument = this.dbFS.doc<any[]>('users/' + window.sessionStorage.getItem('session_uid')).valueChanges();
  }

  submitChat(event) {

    // const message = {
    //   text: event.target.value,
    //   uid: window.sessionStorage.getItem('session_uid'),
    //   timestamp: Date.now()
    // }

    // this.itemsCollection.doc('0').update({
    //   messages: firebase.firestore.FieldValue.arrayUnion(message)
    // });
    // this.itemsDocument.update({chats: FieldValue.arrayUnion("greater_virginia")})
    this.chat.sendMessage(this.chatId, event.target.value);
    event.target.value = '';
  }

  changeChat(secondUser) {
    this.chatFound = false;

    const currentUser = sessionStorage.getItem('session_email');
    let queryObservable = new Observable<UserChat[]>();

    queryObservable = this.db.collection<UserChat>('users-chats', ref => ref.where('users', 'array-contains', currentUser)).valueChanges();

    queryObservable.subscribe(queriedItems => {
      queriedItems.forEach((userChat) => {
        console.log(userChat);
        userChat.users.forEach((user) => {
          console.log(user);
          if (!this.chatFound && user === secondUser) {
            this.setChatId(userChat.chat);
            this.chatFound = true;
          }
        })
      });
      if (!this.chatFound) {
        let newChat = this.db.collection('chats').add({
          messages: []
        }).then(ref => {
          console.log('Added chat: ', ref.id);
          let newChat = this.db.collection('users-chats').add({
            chat: ref.id,
            users: [
              currentUser,
              secondUser
            ]
          }).then(ref => {
            console.log('Added users-chats table: ', ref.id);
          });
        });
      }
    });

  }

  setChatId (chatId) {
    this.chatId = chatId;
    this.chat$ = this.chat.get(this.chatId);
  }

  trackByCreated (i, msg) {
    return msg.createdAt;
  }

}
