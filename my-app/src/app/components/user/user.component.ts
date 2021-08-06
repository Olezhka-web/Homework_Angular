import {Component, Input, OnInit} from '@angular/core';
import {UsersModule} from "../../../models/UsersModule";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  @Input()
  user: UsersModule;

  constructor() { }

  ngOnInit(): void {
  }

}
