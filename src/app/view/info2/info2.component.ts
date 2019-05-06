import { Component, OnInit } from '@angular/core';
import {LoginService} from '../../auth/login.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-info2',
  templateUrl: './info2.component.html',
  styleUrls: ['./info2.component.css']
})
export class Info2Component implements OnInit {

  constructor(private login: LoginService, private router: Router) { }

  ngOnInit() {

  }

  logOut() {
    if (this.login.isAuthenticated) {
      this.login.logOut();
    }

    this.router.navigate(['login']);
  }

}
