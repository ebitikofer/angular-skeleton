import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs';
import { switchMap, first } from 'rxjs/operators';

import * as firebase from 'firebase/app';

export interface Profile { fname: string, lname: string, uname: string, email: string }

@Injectable({
  providedIn: 'root'
})
export class FirebaseAuthService {

  public authState: Observable<firebase.User>;
  user$: Observable<any>;
  user: Observable<firebase.User>;
  public isAuthenticated: boolean = false;

  constructor (
    public afAuth: AngularFireAuth,
    private db: AngularFirestore,
    private router: Router
    ) {
      this.user$ = this.afAuth.authState.pipe(
        switchMap(user => {
          if (user) {
            return this.db.doc<any>(`users/${user.uid}`).valueChanges();
          } else {
            return of(null);
          }
        })
      );
      this.user = afAuth.authState;
  }

  // Returns true if user is logged in
  getUser() {
    return this.user$.pipe(first()).toPromise();
  }

  authenticated(): boolean {
    // return this.authState !== null;
    return this.user !== null;
  }

  anonymousLogin() {
    this.afAuth.auth.signInAnonymously().catch(function (error) {
      // Handle Errors here.
      let errorCode = error.code;
      let errorMessage = error.message;

      if (errorCode === 'auth/operation-not-allowed') {
        alert('You must enable Anonymous auth in the Firebase Console.');
      } else {
        console.error(error);
      }
    });
  }

  emailSignup(email: string, password: string) {
    return this.afAuth.auth.createUserWithEmailAndPassword(email, password)
      .then(() => {
        this.updateUserData();
        console.log('Authenticated');})
      .catch(error => {
        console.log('Failed', error)
      });
  }

  emailLogin(email: string, password: string) {
    return this.afAuth.auth.signInWithEmailAndPassword(email, password)
      .then(() => {
        console.log(this.authState);
        this.updateUserData();
        console.log('Authenticated');
      })
      .catch(error => {
        console.log('Failed', error)
      });
  }

  signOut() {
    return this.afAuth.auth.signOut()
      .then(() => {
        console.log(this.authState);
        if (this.authenticated()) {
          console.log('Unauthenticated');
          return this.router.navigate(['/']);
        } else {
          console.log('Error, still authenticated!');
        }
      })
      .catch(error => {
        console.log(error);
      });
  }

  private updateUserData(): void {

    this.isAuthenticated = true;

    let path = `users/${this.afAuth.auth.currentUser.uid}`;
    let profile = {
      fname: null,
      lname: null,
      uname: this.afAuth.auth.currentUser.displayName,
      email: this.afAuth.auth.currentUser.email,
    }

    window.sessionStorage.setItem('session_uid', this.afAuth.auth.currentUser.uid);
    window.sessionStorage.setItem('session_email', this.afAuth.auth.currentUser.email);

    this.db.doc<Profile>(path)
    .set(profile)
    .catch(error => {
      console.log('Profile loading errror', error)
    });

  }

  // firebase.auth().signInAnonymously().catch(function(error) {
  //   // Handle Errors here.
  //   var errorCode = error.code;
  //   var errorMessage = error.message;
  //   // ...
  // });

  // firebase.auth().onAuthStateChanged(function(user) {
  //   if (user) {
  //     // User is signed in.
  //     var isAnonymous = user.isAnonymous;
  //     var uid = user.uid;
  //     // ...
  //   } else {
  //     // User is signed out.
  //     // ...
  //   }
  //   // ...
  // });

}
