import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { FirebaseAuthService } from '../auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor (
    private router: Router,
    private auth: FirebaseAuthService) { }

  canActivate() {
    console.log('Login Check');
    if (!this.auth.getUser()){
      this.router.navigateByUrl('/login');
    }
    return true;
  }

}
