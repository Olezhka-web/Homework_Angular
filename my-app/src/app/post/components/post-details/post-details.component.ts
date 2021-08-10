import { Component, OnInit } from '@angular/core';
import {PostModel} from "../../../models/PostModel";
import {Router} from "@angular/router";

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {

  post: PostModel;

  constructor(private router: Router) {
    this.post = this.router.getCurrentNavigation()?.extras.state as PostModel;
  }

  ngOnInit(): void {
  }

  goBack() {
    history.back();
  }

}
