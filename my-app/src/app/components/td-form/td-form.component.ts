import {Component, OnInit} from '@angular/core';
import {UsersModel} from "../../models/UsersModel";
import {UsersService} from "../../services/users.service";

@Component({
  selector: 'app-td-form',
  templateUrl: './td-form.component.html',
  styleUrls: ['./td-form.component.css']
})
export class TdFormComponent implements OnInit {

  users: UsersModel[];
  chooseUserId: string;
  chooseUserObj: UsersModel;

  constructor(private usersService: UsersService) { }

  ngOnInit(): void {
    this.usersService.getUsers().subscribe(value => this.users = value);
  }

  showUser() {
    this.chooseUserObj = this.users.find(obj => obj.id === +this.chooseUserId) as UsersModel;
  }
}
