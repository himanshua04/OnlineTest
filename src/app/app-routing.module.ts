import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{ LogInComponent} from './log-in/log-in.component';
import { componentFactoryName } from '@angular/compiler';
import{ StartComponent} from './start/start.component';
import {TestPageComponent} from './test-page/test-page.component';

const routes: Routes = [
  {path:'log-in', component:LogInComponent},
  {path:'start',component:StartComponent},
  { path:'test-page/:id',component:TestPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
