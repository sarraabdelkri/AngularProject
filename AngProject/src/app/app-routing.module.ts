import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './Pages/contact/contact.component';

import { NotfoundComponent } from './Pages/notfound/notfound.component';
import { HomeComponent } from './users/home/home.component';

const Routes:Routes=[
  {path:'',component:ContactComponent},
  { path: 'users', loadChildren: () => import('./users/users.module').then(m => m.UsersModule) },
  {path:'**',component:NotfoundComponent },
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(Routes),
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
