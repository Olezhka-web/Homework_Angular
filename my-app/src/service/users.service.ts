import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {UsersModule} from "../models/UsersModule";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private httpClient: HttpClient) { }

  getUsers():Observable<UsersModule[]>{
    return this.httpClient.get<UsersModule[]>('https://jsonplaceholder.typicode.com/users');
  }
}
