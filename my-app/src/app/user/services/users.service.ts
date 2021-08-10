import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {UserModel} from "../../models/UserModel";

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private _url = 'https://jsonplaceholder.typicode.com/users';

  constructor(private httpClient: HttpClient) { }

  getUsers(): Observable<UserModel[]>{
    return this.httpClient.get<UserModel[]>(this._url);
  }
}
