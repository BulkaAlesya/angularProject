import {Component, Input, OnInit} from '@angular/core';
import {NewsService} from '../feedService/news.service';
import {News} from '../feedService/news';

@Component({
  selector: 'app-main-page',
  templateUrl: './mainPage.component.html',
  styleUrls: []
})
export class MainPageComponent implements OnInit {

  public allNews: Array<News>;

 constructor(private serv: NewsService) {
    this.allNews = new Array<News>();
  }
  ngOnInit() {
    this.loadFeeds();
  }
  loadFeeds() {
    this.serv.getNews().subscribe((data: News[]) => {
      this.allNews = data;
      console.log(this.allNews);
    });
  }

}
