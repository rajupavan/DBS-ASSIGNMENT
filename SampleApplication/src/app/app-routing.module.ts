import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './components/user/user.component';
import { UsersListComponent } from './components/users-list/users-list.component';

const routes: Routes = [
  {path:'' , redirectTo:'/usersList', pathMatch:'full'},
  {path:'usersList', component: UsersListComponent},
  {path:'createUser', component: UserComponent},
  {path:'updateUser/:id', component: UserComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
