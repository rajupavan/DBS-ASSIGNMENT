import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersListComponent } from './components/users-list/users-list.component';

const routes: Routes = [
  {path:'' , redirectTo:'/userlist', pathMatch:'full'},
  {path:'userlist', component: UsersListComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
