import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
    Router,
    RouterStateSnapshot,
  } from '@angular/router';
@Injectable({
    providedIn: 'root',
  })
  export class AuthGuard implements CanActivate  {
    constructor( private router: Router) {}
  
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
      let session =localStorage.getItem('session');
       if(session=='true'){
         return true;
       }
      this.router.navigate(['/login']);
      return false;
    }
  }