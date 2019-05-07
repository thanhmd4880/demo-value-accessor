import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {LoginService} from '../../auth/login.service';
import {Router} from '@angular/router';
import {UserRoles} from '../../auth/login.service';
import * as moment from 'moment';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  formGroup: FormGroup;
  constructor(private  login: LoginService, private router: Router) {
    console.log('login');

  }

  ngOnInit(): void {
    this.formGroup = new FormGroup({
      username: new FormControl('dmthanh', [Validators.maxLength(20)]),
      password: new FormControl('123'),
      select: new FormControl(2, [Validators.required]),
      dateValue: new FormControl(moment(new Date(2019, 0, 3)))
    });

    this.formGroup.valueChanges.subscribe((changes) => {
      console.log(changes);
    });
  }

  onSubmit() {
    const username = this.formGroup.get('username').value;
    const password = this.formGroup.get('password').value;

    this.login.login(username, password).subscribe(result => {
      // navigate to the info url
      if (result) {
        if (!this.login.getUserRole(username) || this.login.getUserRole(username).length < 1) {
          console.log('You have no permission');
          return;
        }
        if (this.login.getUserRole(username).includes(UserRoles.Info)) {
          this.router.navigate(['info']);
        }
      } else { console.log('Invalid username or password'); }
    });
  }
}
