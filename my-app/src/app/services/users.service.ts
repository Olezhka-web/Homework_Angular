import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {UsersModel} from "../models/UsersModel";

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private _url = 'https://jsonplaceholder.typicode.com/users';

  constructor(private httpClient: HttpClient) { }

  getUsers(): Observable<UsersModel[]>{
    return this.httpClient.get<UsersModel[]>(this._url);
}

}
