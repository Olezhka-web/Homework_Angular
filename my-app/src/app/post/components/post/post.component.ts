import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {PostModel} from "../../../models/PostModel";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @Input()
  post: PostModel;

  @Output()
  postObj: EventEmitter<PostModel> = new EventEmitter<PostModel>();

  constructor() { }

  ngOnInit(): void {
  }

  showPostInfo() {
    this.postObj.emit(this.post);
  }

}
