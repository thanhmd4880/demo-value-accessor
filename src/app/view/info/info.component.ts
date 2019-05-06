import { Component, OnInit } from '@angular/core';
import {LoginService} from '../../auth/login.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

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
