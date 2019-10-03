import { Injectable } from '@angular/core';
import { AngularFireAuth, AuthProviders } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class FirebaseAuthService {

  constructor (public afAuth: AngularFireAuth) {

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
      // .then(() => this.updateUserData())
      .catch(error => console.log(error));
  }

  emailLogin(email: string, password: string) {
    return this.afAuth.auth.signInWithEmailAndPassword(email, password)
      //  .then(() => this.updateUserData())
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
