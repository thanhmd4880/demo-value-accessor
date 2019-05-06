import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {InfoComponent} from './info.component';
import {LoginService} from '../../auth/login.service';

const routes: Routes = [
  {path: '', component: InfoComponent}
];

@NgModule({
  declarations: [
    InfoComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  providers: [LoginService],
  exports: []
})
export class InfoModule { }
