import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

import { map } from 'rxjs/operators'
import { Observable } from 'rxjs';
import { UserService } from '../user/user.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private auth: AuthService, 
    private router: Router,
    private user: UserService) {

  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      //debugger
      if(this.auth.isLoggedIn) {
        return true
      }
      return this.user.isLoggedIn().pipe(map(res => {
        if(res.status) {
          this.auth.setLoggedIn(true)
          return true
        } else {
          this.router.navigate(['login'])
          return false
        }
      }))
  }
}