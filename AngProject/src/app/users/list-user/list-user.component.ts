import { User } from '../../Core/model/user';
import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/Core/services/user.service';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {
  public list: User[] 
 

  constructor(private userService:UserService) { }
  ngOnInit():void{
    this.list=this.userService.listUser}


    delete(p: User) {
      let i = this.list.indexOf(p);
      this.list.splice(i, 1);
      let index = this.userService.listUser.indexOf(p);
      this.userService.listUser.splice(index, 1)
    }
    update(id:number,u:User){
  
    }
  
} 