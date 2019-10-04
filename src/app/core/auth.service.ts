import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs/Observable'

export interface Profile { fname: string, lname: string, uname: string, email: string }

@Injectable({
  providedIn: 'root'
})
export class FirebaseAuthService {

  public authState: Observable<firebase.User>;
  public isAuthenticated: boolean = false;

  constructor (public afAuth: AngularFireAuth,
    private db: AngularFirestore,) {
  }

  // Returns true if user is logged in

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

  emailSignUp(email: string, password: string) {
    return this.afAuth.auth.createUserWithEmailAndPassword(email, password)
      .then(() => this.updateUserData())
      .catch(error => console.log(error));
  }

  emailLogin(email: string, password: string) {
    return this.afAuth.auth.signInWithEmailAndPassword(email, password)
      .then(() => this.updateUserData())
      .catch(error => console.log(error));
  }

  private updateUserData(): void {

    this.isAuthenticated = true;
    console.log('Authenticated!');
    

    let path = `users/${this.afAuth.auth.currentUser.uid}`;
    let profile = {
      fname: null,
      lname: null,
      uname: this.afAuth.auth.currentUser.displayName,
      email: this.afAuth.auth.currentUser.email,
    }
  
    window.sessionStorage.setItem('session_uid', this.afAuth.auth.currentUser.uid);

    this.db.doc<Profile>(path).set(profile)
    .catch(error => console.log(error));
  
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
