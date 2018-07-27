import { Component } from '@angular/core';
import {UserService} from './user/userService';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {NewsService} from './feedService/news.service';
import {News} from './feedService/news';
import {User} from './user/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  registrationForms: FormGroup;
  newUser: User;

  constructor(private serv: NewsService, private userServ: UserService) {
    this.registrationForms = new FormGroup({
      userName: new FormControl('', Validators.required),
      userEmail: new FormControl('')
    });
  }
  onSubmit() {
    console.log(this.registrationForms.value);
  }
  regiatration() {
    this.newUser = new User(this.registrationForms.value.userName, this.registrationForms.value.userEmail, false);
    this.userServ.addNewUser(this.newUser).subscribe(data => {
      console.warn('Пользователь добавлен');
    });
  }
  autorixation() {
    this.newUser = new User(this.registrationForms.value.userName, this.registrationForms.value.userEmail, false);
    this.userServ.autorizUser(this.newUser).subscribe( (data: User) => {
      console.warn(data[0].role);
    });
  }
}
