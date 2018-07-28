import {Component, Input} from '@angular/core';
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

}
