import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { ChildData } from 'src/app/pages/news-page/news-page.component';

@Component({
    selector: 'app-news-details-content',
    templateUrl: './news-details-content.component.html',
    styleUrls: ['./news-details-content.component.css']
})
export class NewsDetailsContentComponent implements OnInit {

    constructor() { }

    @Input('newsContent')
    newsContents!: ChildData

    @ViewChild('contents')
    dataContent!: ElementRef

    ngOnInit(): void {
        //this.dataContent.nativeElement.innerHTML = this.newsContents.selftext_html
    }

}
