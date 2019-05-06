import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {Info2Component} from './info2.component';
import {LoginService} from '../../auth/login.service';

const routes: Routes = [
  {path: '', component: Info2Component}
];

@NgModule({
  declarations: [
    Info2Component
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  providers: [LoginService],
  exports: []
})
export class InfoModule2 { }
