import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';

import { FormsModule } from '@angular/forms';

import { ListUserComponent } from './list-user/list-user.component';
import { HomeComponent } from './home/home.component';



@NgModule({
  declarations: [
    UsersComponent,
    ListUserComponent,
   HomeComponent,
   
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    FormsModule
  ]
})
export class UsersModule { }
