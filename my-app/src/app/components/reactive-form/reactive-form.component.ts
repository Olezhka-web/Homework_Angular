import { Component, OnInit } from '@angular/core';
import {UsersModel} from "../../models/UsersModel";
import {UsersService} from "../../services/users.service";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  users: UsersModel[];
  chooseUserId = new FormControl('');
  chooseUserObj: UsersModel;

  myForm: FormGroup = new FormGroup({users: this.chooseUserId});

  constructor(private usersService: UsersService) { }

  ngOnInit(): void {
    this.usersService.getUsers().subscribe(value => this.users = value);
  }

  showUser() {
    this.chooseUserObj = this.users.find(obj => obj.id === +this.chooseUserId.value) as UsersModel;
  }
}
