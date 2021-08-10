import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {UserModel} from "../../../models/UserModel";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  @Input()
  user: UserModel;

  @Output()
  userObj: EventEmitter<UserModel> = new EventEmitter<UserModel>();

  constructor() { }

  ngOnInit(): void {
  }

  showUserInfo() {
    this.userObj.emit(this.user);
  }
}
