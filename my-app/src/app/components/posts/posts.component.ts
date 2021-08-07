import { Component, OnInit } from '@angular/core';
import {PostsService} from "../../services/posts.service";
import {PostsModel} from "../../models/PostsModel";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: PostsModel[];

  constructor(private postsService: PostsService) { }

  ngOnInit(): void {
    this.postsService.getPosts().subscribe(value => this.posts = value);
  }

}
