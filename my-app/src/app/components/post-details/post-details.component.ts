import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {PostsModel} from "../../models/PostsModel";

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {

  post: PostsModel;

  constructor(private router: Router) {
    this.post = this.router.getCurrentNavigation()?.extras.state as PostsModel;
  }

  ngOnInit(): void {
  }

  goBack() {
    history.back();
  }
}
