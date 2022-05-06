import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ToolComponent } from './tool/tool.component';
import { CategoryComponent } from './category/category.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:'tool', component:ToolComponent},
  {path:'category', component:CategoryComponent},
  {path:'home', component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
