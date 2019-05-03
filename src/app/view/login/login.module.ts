import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {CommonModule} from '@angular/common';
import {LoginComponent} from './login.component';
import {Router, RouterModule, Routes} from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import {InpurRowComponent} from '../inpur-row/inpur-row.component';
import {MatButtonModule} from '@angular/material';
import {MatIconModule, MatInputModule} from '@angular/material';
import {MatFormFieldModule} from '@angular/material/form-field';
const routes: Routes = [
  {path: '', component: LoginComponent}
];

@NgModule({
  declarations: [
    LoginComponent,
    InpurRowComponent
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
    MatInputModule
  ],
  providers: [],
  exports: []
})
export class LoginModule { }
