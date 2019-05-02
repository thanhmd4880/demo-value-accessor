import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  formGroup: FormGroup;
  constructor() {
  }

  ngOnInit(): void {
    this.formGroup = new FormGroup({
      username: new FormControl('aaa', [Validators.maxLength(6)]),
      password: new FormControl('sd'),
      select: new FormControl(2, [Validators.required])
    });

    this.formGroup.valueChanges.subscribe((changes) => {
      console.log(changes);
    });
  }



}
