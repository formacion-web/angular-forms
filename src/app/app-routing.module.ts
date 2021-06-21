import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Form01Component } from './formularios/form01/form01.component';
import { Form02Component } from './formularios/form02/form02.component';

const routes: Routes = [
  {path:'forms/01', component:Form01Component},
  {path:'forms/02', component:Form02Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
