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

const routes = [
  {path: '', component: MainPageComponent},
  {path: 'personalRoom', component: PersonalRoomComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    NewsItemComponent,
    PersonalRoomComponent,
    MainPageComponent
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
