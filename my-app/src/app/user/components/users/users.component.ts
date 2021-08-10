import { Component, OnInit } from '@angular/core';
import {UsersService} from "../../services/users.service";
import {UserModel} from "../../../models/UserModel";
import {Router} from "@angular/router";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: UserModel[];

  constructor(private usersService: UsersService, private router: Router) { }

  ngOnInit(): void {
    this.usersService.getUsers().subscribe(value => this.users = value);
  }

  getUserObj(userObj: UserModel) {
    this.router.navigate(['users', userObj.id], {state: userObj});
  }
}
