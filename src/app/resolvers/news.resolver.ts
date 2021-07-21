import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'
import { Child } from '../pages/news-page/news-page.component';
import { NewsService } from '../services/news.service';

@Injectable({
  providedIn: 'root'
})
export class NewsResolver implements Resolve<Child[]> {
  constructor(private newsService: NewsService) {}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Child[]> {
    return this.newsService.getAllNews().pipe(map(news => news.data.children));
  }
}
