import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {User} from './user';

@Injectable({
  providedIn: 'root',
})
export class UserTransport {
  public userName: string;
 setUserName( name: string) {
   this.userName = name;
 }
 getUserName () {
   return this.userName;
 }
 }
