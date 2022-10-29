import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

import {  ListUserComponent } from './list-user/list-user.component';
import { UsersComponent } from './users.component';

const routes: Routes = 
[{ path: '', component: UsersComponent , children :
[{path:'list',component:ListUserComponent}, 
{path:'new',component:HomeComponent},
{path:'update/:id', component: ListUserComponent}
]
}
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
