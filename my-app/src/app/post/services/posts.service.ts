import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {PostModel} from "../../models/PostModel";

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  private _url = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private httpClient: HttpClient) { }

  getPosts(): Observable<PostModel[]>{
    return this.httpClient.get<PostModel[]>(this._url);
  }
}
