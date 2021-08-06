import { Component, OnInit } from '@angular/core';
import {PostsModel} from "../../models/PostsModel";
import {ActivatedRoute} from "@angular/router";
import {PostsService} from "../../service/posts.service";

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {

  post: PostsModel;

  constructor(private activateRoute: ActivatedRoute, private postService: PostsService) {
    this.activateRoute.params.subscribe(({id}) => this.postService.getPost(id).subscribe(value => this.post = value));
  }

  ngOnInit(): void {
  }

}
