import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Component1Component } from './component1/component1.component';
import { Component2Component } from './component2/component2.component';
import { ListComponent } from './list/list.component';
import { DefaultComponent } from './default/default.component';


const routes: Routes = [
  {path: 'one',component:Component1Component},
  {path: 'two',component:Component2Component},
  {path : 'list',component:ListComponent},
  {path : '',component:DefaultComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
