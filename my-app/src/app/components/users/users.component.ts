import { Component, OnInit } from '@angular/core';
import {UsersService} from "../../../service/users.service";
import {UsersModule} from "../../../models/UsersModule";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: UsersModule[];

  constructor(private usersService: UsersService) {
    this.usersService.getUsers().subscribe(value => this.users = value);
  }

  ngOnInit(): void {
  }

}
