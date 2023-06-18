import { NgModule, createComponent } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
const routes: Routes = [
  {
    path: 'fruits/create',
    component: CreateComponent,
  },
  {
    path: 'fruits/home',
    component: HomeComponent,
  },
  {
    path:'fruits/edit/:id',
    component: EditComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FruitsRoutingModule { }
