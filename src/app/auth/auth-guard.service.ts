import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree} from '@angular/router';
import {LoginService} from './login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanLoad, CanActivate {

  constructor(private router: Router, private login: LoginService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.login.isLogIn() && this.login.getUserRole(this.login.userName).includes(route.url[0].path)) {
      return true;
    }
    return false;
  }

  canLoad(route: Route, segments: UrlSegment[]): boolean {
    if (this.login.isLogIn() && this.login.getUserRole(this.login.userName).includes(route.path)) {
      return true;
    }
    return false;
  }
}
