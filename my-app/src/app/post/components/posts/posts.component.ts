import { Component, OnInit } from '@angular/core';
import {PostModel} from "../../../models/PostModel";
import {PostsService} from "../../services/posts.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: PostModel[];

  constructor(private postsService: PostsService, private router: Router) { }

  ngOnInit(): void {
    this.postsService.getPosts().subscribe(value => this.posts = value);
  }

  getPostObj(postObj: PostModel) {
    this.router.navigate(['posts', postObj.id], {state: postObj});
  }

}
