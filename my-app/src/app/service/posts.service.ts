import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {PostsModel} from "../models/PostsModel";

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private httpClient: HttpClient) { }

  private url = 'https://jsonplaceholder.typicode.com/posts';

  getPosts():Observable<PostsModel[]>{
    return this.httpClient.get<PostsModel[]>(this.url);
  }

  getPost(id: number):Observable<PostsModel>{
    return this.httpClient.get<PostsModel>(this.url + '/' + id);
  }
}
