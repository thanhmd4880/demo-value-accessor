import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatButtonModule} from '@angular/material/button';
import {InpurRowComponent} from './view/inpur-row/inpur-row.component';
import { SelectInputComponent } from './view/select-input/select-input.component';
import {MatDatepickerModule, MatSelectModule} from '@angular/material';
import { AppCustomDateTimeComponent } from './view/app-custom-date-time/app-custom-date-time.component';

import {MatNativeDateModule } from '@angular/material';
@NgModule({
  declarations: [
    AppComponent,
    InpurRowComponent,
    SelectInputComponent,
    AppCustomDateTimeComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    FlexLayoutModule,
    MatButtonModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    FormsModule
  ],
  providers: [MatDatepickerModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
