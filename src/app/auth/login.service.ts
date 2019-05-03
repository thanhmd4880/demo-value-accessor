import { Injectable } from '@angular/core';

import { of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  isAuthenticated = false;
  user =
    {
      id: 1,
      name: 'Thanh',
      username: 'dmthanh',
      password: '123',
      role: ['Login', 'Info']
    };

  constructor() { }

  login(username, password) {
    if (username === this.user.username && password === this.user.password) {
      this.isAuthenticated = true;
      return of(true);
    }
    return  of(false);
  }
}
