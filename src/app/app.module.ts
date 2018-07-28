import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NewsItemComponent} from './NewsItem/newsItem.component';
import {PersonalRoomComponent} from './personalRoom/personalRoom.component';
import {RouterModule} from '@angular/router';
import {MainPageComponent} from './mainPage/mainPage.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {HttpModule} from '@angular/http';
import {AutorizComponent} from './user/userAutification/autoriz.component';
import {RegistrComponent} from './user/Registration/registr.component';

const routes = [
  {path: 'mainPage', component: MainPageComponent},
  {path: 'personalRoom', component: PersonalRoomComponent},
  {path: 'authorization', component: AutorizComponent},
  {path: 'registration', component: RegistrComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    NewsItemComponent,
    PersonalRoomComponent,
    MainPageComponent,
    AutorizComponent,
    RegistrComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
