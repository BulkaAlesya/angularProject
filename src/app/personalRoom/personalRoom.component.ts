import {Component, Input, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {News} from '../feedService/news';
import {NewsService} from '../feedService/news.service';
import {MainPageComponent} from '../mainPage/mainPage.component';

@Component({
  selector: 'app-personal-room',
  templateUrl: './personalRoom.component.html',
  styleUrls: []
})
export class PersonalRoomComponent implements OnInit {
  @ViewChild('readOnlyTemplate') readOnlyTemplate: TemplateRef<any>;
  @ViewChild('editTemplate') editTemplate: TemplateRef<any>;
  allNews: Array<News>;
  newtitle: String;
  newtext: String;
  newItem: News;
  editedNews: News;
  @Input() news;

  constructor(private serv: NewsService) {
    this.allNews = new Array<News>();
  }

  ngOnInit() {
    this.loadNews();
  }

  loadNews() {
    this.serv.getNews().subscribe((data: News[]) => {
      this.allNews = data;
    });
  }

  addNews() {
    this.newItem = new News(0, this.newtitle, this.newtext);

    this.serv.createNews(this.newItem).subscribe(data => {
      this.loadNews();
    });
  }

  deleteNews(deletedNews: News) {
    if (confirm('Вы действительно хотите удалить новость?')) {
      this.serv.deleteNews(deletedNews.id).subscribe(data => {
        this.loadNews();
      });
    }
  }
  editNews(news: News) {
    this.editedNews = news;
    this.loadTemplate(news);
  }
  canselEdite() {
    this.editedNews = null;
  }
  saveEditesNews() {
  this.serv.updateNews(this.editedNews.id, this.editedNews).subscribe(data => {
});
this.editedNews = null;
}
  loadTemplate(news: News) {
    if (this.editedNews && this.editedNews.id === news.id) {
      console.log(this.editedNews);
      return this.editTemplate;
    } else {
      return this.readOnlyTemplate;
    }
  }
}

