import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../userService';
import {NewsService} from '../../feedService/news.service';
import {User} from '../user';

@Component({
  selector: 'app-authorization-room',
  templateUrl: './autoriz.component.html',
  styleUrls: ['./autoriz.component.css']
})
export class AutorizComponent {
  registrationForms: FormGroup;
  newUser: User;
  userRoleAdmin: boolean;
  userRoleUser: boolean;

  constructor(private serv: NewsService, private userServ: UserService) {
    this.registrationForms = new FormGroup({
      userName: new FormControl('', Validators.required),
      userEmail: new FormControl('')
    });
    console.log(1);
  }
  onSubmit() {
    console.log(this.registrationForms.value);
  }
  authorization() {
    this.newUser = new User(this.registrationForms.value.userName, this.registrationForms.value.userEmail, false);
    this.userServ.autorizUser(this.newUser).subscribe( (data: User) => {
           if ( data[0].login === this.registrationForms.value.userName && data[0].role === true) {
             this.userRoleAdmin = true;
           }
           if ( data[0].login === this.registrationForms.value.userName && data[0].role === false) {
             this.userRoleUser = true;
           }
    });
  }
}

