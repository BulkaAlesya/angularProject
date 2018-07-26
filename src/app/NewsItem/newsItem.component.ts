import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-news-item',
  templateUrl: './newsItem.component.html',
  styleUrls: ['../app.component.css']
})
export class NewsItemComponent {
  @Input() news;
}
