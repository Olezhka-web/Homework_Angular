import { Component, OnInit } from '@angular/core';
import {UserModel} from "../../../models/UserModel";
import {Router} from "@angular/router";

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  user: UserModel;

  constructor(private router: Router) {
    this.user = this.router.getCurrentNavigation()?.extras.state as UserModel;
  }

  ngOnInit(): void {
  }

  goBack() {
    history.back();
  }
}
