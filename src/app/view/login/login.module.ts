import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {CommonModule} from '@angular/common';
import {LoginComponent} from './login.component';
import {Router, RouterModule, Routes} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import {InpurRowComponent} from '../inpur-row/inpur-row.component';
import {MatButtonModule, MatDatepickerModule, MatNativeDateModule} from '@angular/material';
import {MatIconModule, MatInputModule} from '@angular/material';
import {MatFormFieldModule} from '@angular/material/form-field';
import {SelectInputComponent} from '../select-input/select-input.component';
import {AppModule} from '../../app.module';
import {MatSelectModule} from '@angular/material/select';
import {AppCustomDateTimeComponent} from '../app-custom-date-time/app-custom-date-time.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

const routes: Routes = [
  {path: '', component: LoginComponent}
];

@NgModule({
  declarations: [
    LoginComponent,
    InpurRowComponent,
    SelectInputComponent,
    AppCustomDateTimeComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    FlexLayoutModule,
    MatButtonModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    FormsModule,
  ],
  providers: [],
  exports: []
})
export class LoginModule {
  constructor() {
    // console.log('login');
  }
}
