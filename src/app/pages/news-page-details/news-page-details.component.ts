import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/services/news.service';
import { Child } from '../news-page/news-page.component';

@Component({
    selector: 'app-news-page-details',
    templateUrl: './news-page-details.component.html',
    styleUrls: ['./news-page-details.component.css']
})
export class NewsPageDetailsComponent implements OnInit {

    constructor(private newsService: NewsService) { }
    public currentNews!: Child;

    async ngOnInit() {
        this.currentNews = this.newsService.getCurrentNews()
        console.log(this.currentNews)
        //TODO
        // let comments = await this.newsService.getComments(this.currentNews).toPromise();
        // Instead of extracting comments at this moment, navigating the user to the Reddit page.
    }

}
