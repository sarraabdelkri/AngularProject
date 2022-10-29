import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/Core/model/user';
import { UserService } from 'src/app/Core/services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  list: User[]
  category:String;
  constructor(private userService: UserService) {

   }
  ngOnInit(): void {
    this.list=this.userService.listUser;

    
  }

}