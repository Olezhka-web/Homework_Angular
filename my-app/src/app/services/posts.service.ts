import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {PostsModel} from "../models/PostsModel";

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  private _url = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private httpClient : HttpClient) { }

  getPosts():Observable<PostsModel[]>{
    return this.httpClient.get<PostsModel[]>(this._url);
  }

}
