import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {User} from './user';

@Injectable({
  providedIn: 'root',
})
export class UserService {

  private url = 'http://localhost:3000/users/';
  constructor( private http: HttpClient) { }

  autorizUser(user: User) {
    return this.http.get<User>(this.url + '?login=' + user.login + '&&password=' + user.password);
  }
  addNewUser(user: User) {
    return this.http.post<User>(this.url, user);
  }
}
