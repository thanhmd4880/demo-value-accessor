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
import {MatAutocompleteModule} from '@angular/material/autocomplete';


const appRoutes: Routes = [
  { path: 'login', loadChildren: './view/login/login.module#LoginModule'},
  { path: 'info2', loadChildren: './view/info2/info2.module#InfoModule2', canActivate: [AuthGuardService], canLoad: [AuthGuardService]},
  { path: 'info', loadChildren: './view/info/info.module#InfoModule', canActivate: [AuthGuardService], canLoad: [AuthGuardService]},
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', redirectTo: '/info', pathMatch: 'full' }
];


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    FlexLayoutModule,
    MatButtonModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  providers: [],
  exports: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
