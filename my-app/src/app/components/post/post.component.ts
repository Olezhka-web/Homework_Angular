import {Component, Input, OnInit} from '@angular/core';
import {PostsModel} from "../../models/PostsModel";
import {Router} from "@angular/router";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @Input()
  post: PostsModel;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  getPostDetails(): void {
    this.router.navigate(['posts', this.post.id], {state: this.post});
  }
}
