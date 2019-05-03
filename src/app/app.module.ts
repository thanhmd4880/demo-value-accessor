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
import {MatDatepickerModule, MatSelectModule} from '@angular/material';
import {MatNativeDateModule } from '@angular/material';
import {RouterModule, Routes} from '@angular/router';
import {AuthGuardService} from './auth/auth-guard.service';
import { Info2Component } from './view/info2/info2.component';

const appRoutes: Routes = [
  { path: 'login', loadChildren: './view/login/login.module#LoginModule' },
  { path: 'info', loadChildren: './view/info/info.module#InfoModule', canActivate: [AuthGuardService]},
  { path: 'info2', loadChildren: './view/info2/info2.module#InfoModule', canActivate: [AuthGuardService]},
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', redirectTo: '/info', pathMatch: 'full' }
];


@NgModule({
  declarations: [
    AppComponent,
    Info2Component,
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
    FormsModule,
    RouterModule.forRoot(appRoutes, { enableTracing: true })
  ],
  providers: [MatDatepickerModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
