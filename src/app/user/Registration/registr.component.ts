import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../userService';
import {NewsService} from '../../feedService/news.service';
import {User} from '../user';

@Component({
  selector: 'app-register-room',
  templateUrl: './registr.component.html',
  styleUrls: ['../userAutification/autoriz.component.css',
    './registr.component.css']
})
export class RegistrComponent {
  registrationForms: FormGroup;
  newUser: User;
  userRole: boolean;

  constructor(private serv: NewsService, private userServ: UserService) {
    this.registrationForms = new FormGroup({
      userName: new FormControl('', Validators.required),
      userPassword: new FormControl(''),
      userPasswordRepeat: new FormControl('')
    });
    console.log(1);
  }
  onSubmit() {
    console.log(this.registrationForms.value);
  }
  regiatration() {
    this.newUser = new User(this.registrationForms.value.userName, this.registrationForms.value.userPassword, false);
    if ( this.registrationForms.value.userPassword === this.registrationForms.value.userPasswordRepeat) {
      this.userServ.addNewUser(this.newUser).subscribe(data => {
        console.warn('Пользователь добавлен');
        this.userRole = true;
      });
    } else {
      alert('\n' +
        'The password is incorrect');
    }
  }
}
