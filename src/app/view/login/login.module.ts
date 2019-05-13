import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {CommonModule} from '@angular/common';
import {LoginComponent} from './login.component';
import {Router, RouterModule, Routes} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import {InpurRowComponent} from '../inpur-row/inpur-row.component';
import {MatAutocompleteModule, MatButtonModule, MatDatepickerModule, MatNativeDateModule} from '@angular/material';
import {MatIconModule, MatInputModule} from '@angular/material';
import {MatFormFieldModule} from '@angular/material/form-field';
import {SelectInputComponent} from '../select-input/select-input.component';
import {AppModule} from '../../app.module';
import {MatSelectModule} from '@angular/material/select';
import {AppCustomDateTimeComponent} from '../app-custom-date-time/app-custom-date-time.component';
import {CustomDateTimeDirective} from '../../directive/CustomDateTimeDirective';
import {CustomDateTimeValidator} from '../../validators/CustomDateTimeValidator';
import {DateTimeRangeComponent} from '../date-time-range/date-time-range.component';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio';
import {MatListModule} from '@angular/material/list';
const routes: Routes = [
  {path: '', component: LoginComponent}
];

@NgModule({
  declarations: [
    LoginComponent,
    InpurRowComponent,
    SelectInputComponent,
    AppCustomDateTimeComponent,
    DateTimeRangeComponent
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
    MatNativeDateModule,
    FormsModule,
    MatAutocompleteModule,
    MatCardModule,
    MatDividerModule,
    MatCheckboxModule,
    MatRadioModule,
    MatListModule,
  ],
  providers: [],
  exports: []
})
export class LoginModule {
  constructor() {
    // console.log('login');
  }
}
