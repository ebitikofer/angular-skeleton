import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor (private router: Router) { }

  canActivate() {
    console.log('Login Check');
    this.router.navigateByUrl('/login');
    return true;
  }

}
