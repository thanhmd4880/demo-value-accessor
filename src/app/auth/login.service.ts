import { Injectable } from '@angular/core';
import { of } from 'rxjs';
export const UserRoles = {Login: 'login', Info: 'info', Info2: 'info2' };

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  isAuthenticated: boolean;
  user =
    {
      id: 1,
      name: 'Thanh',
      username: 'dmthanh',
      password: '123',
      role: [UserRoles.Info, UserRoles.Info2]
    };

  get userName() {
    return this.user.username;
  }
  constructor() {
    console.log("Init !");
    this.isAuthenticated = false;
    if (localStorage.getItem('isAuthenticated')) {
      this.isAuthenticated = JSON.parse(localStorage.getItem('isAuthenticated'));
    }
  }

  login(username, password) {
    if (username === this.user.username && password === this.user.password) {
      this.isAuthenticated = true;
      localStorage.setItem('isAuthenticated', JSON.stringify(true));
      return of(true);
    }
    return  of(false);
  }

  getUserRole(username): string[] {
    if (this.isAuthenticated) {
      return this.user.role;
    } else {
      return [];
    }
  }

  isLogIn() {
    return this.isAuthenticated;
  }

  logOut() {
    this.isAuthenticated = false;
    localStorage.setItem('isAuthenticated', JSON.stringify(false));
  }
}
