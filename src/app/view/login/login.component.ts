import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {LoginService} from '../../auth/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formGroup: FormGroup;
  constructor(private  login: LoginService) {
  }

  ngOnInit(): void {
    this.formGroup = new FormGroup({
      username: new FormControl('aaa', [Validators.maxLength(6)]),
      password: new FormControl('sd'),
      select: new FormControl(2, [Validators.required]),
      // dateOption: new FormControl('today'),
      dateValue: new FormControl(new Date(2019, 0, 3))
    });

    this.formGroup.valueChanges.subscribe((changes) => {
      console.log(changes);
    });
  }

  onSubmit() {
    this.login.login('dmthanh', '123').subscribe(result => {
      // navigate to the info url
      if(result) console.log("Login successfully");
      else console.log("Login failed");
    })
  }
}
