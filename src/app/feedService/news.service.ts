import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {News} from './news';

@Injectable({
  providedIn: 'root',
})
export class NewsService {

  private url = 'http://localhost:3000/posts/';
  constructor( private http: HttpClient) { }

  getNews() {
    return this.http.get<News[]>(this.url);
  }
  createNews(news: News) {
    return this.http.post<News>(this.url, news);
  }
  deleteNews(id: number) {
    return this.http.delete('http://localhost:3000/posts/' + id );
  }
  updateNews(id: number, editedNews: News ) {
    return this.http.put('http://localhost:3000/posts/' + id, editedNews);
  }
}
