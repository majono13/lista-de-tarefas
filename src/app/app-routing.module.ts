import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { AddComponent } from './main/add/add.component';
import { MainComponent } from './main/main.component';


const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'nova-tarefa', component: AddComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
