import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Child, News } from '../pages/news-page/news-page.component';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http: HttpClient) { }

  serverLink: string = "https://www.reddit.com"

  private currentDetailedNews: Child = new Child()

  getAllNews(count: number = 20, type: string = "angular"): Observable<News> {
    return this.http.get<News>(this.serverLink + "/r/"+type+"/top.json?limit="+count);
  }

  setCurrentNews(news: Child) {
    this.currentDetailedNews = news
  }

  getCurrentNews(): Child {
    return this.currentDetailedNews
  }

  /**
  * @deprecated The method should not be used, need to generate API key from Reddit server for extracting comments
  */
  getComments(news: Child): Observable<any> {
    return this.http.get(this.serverLink + news.data.permalink);
  }
}
