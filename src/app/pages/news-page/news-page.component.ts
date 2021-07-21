import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NewsService } from 'src/app/services/news.service';

@Component({
    selector: 'app-news-page',
    templateUrl: './news-page.component.html',
    styleUrls: ['./news-page.component.css']
})
export class NewsPageComponent implements OnInit {

    public news: Child[] = []

    @ViewChild('b')
    private mybutton!: ElementRef<ElementCSSInlineStyle>;

    @ViewChild('borderdiv')
    private borderDiv!: ElementRef<Element>;

    constructor(private route: ActivatedRoute, private newsService: NewsService) { }

    ngOnInit(): void {
        this.news = this.route.snapshot.data["news"]
        console.log(this.route.snapshot.data["news"])
    }

    async onScroll(event: any){
        // visible height + pixel scrolled >= total height
        if (event.target.offsetHeight + event.target.scrollTop >= event.target.scrollHeight) {
            console.log("End of div...");
            const rndInt = Math.floor(Math.random() * 17) + 1
            console.log(rndInt, TYPES[rndInt])
            let news: News = await this.newsService.getAllNews(10, TYPES[rndInt]).toPromise()
            // this.news = [...this.news, ...news.data.children] (would be changing the reference of this.news affecting the whole datastructure)
            news.data.children.forEach(n => this.news.push(n));
        }
        if (event.target.scrollTop > 20 || event.target.scrollTop > 20) {
            this.mybutton.nativeElement.style.display = "block";
          } else {
            this.mybutton.nativeElement.style.display = "none";
        }
    }

    sendData(news: Child): void {
        this.newsService.setCurrentNews(news)
    }

    async toTopOfPage() {
        this.borderDiv.nativeElement.scrollTop = 0
        this.news = (await this.newsService.getAllNews().toPromise()).data.children
    }

}

export class News {
    kind: string = ""
    data: Data = new Data()
}

class Data {
    children: Child[] = []
}

export class Child {
    data: ChildData = new ChildData()
}

export class ChildData {
    title: string = ""
    ups: number = 0
    thumbnail: string = ""
    url_overridden_by_dest: string = ""
    id: string = ""
    url: string = ""
    subreddit_subscribers: number = 0
    created: number = 0
    subreddit: string = ""
    author: string = ""
    permalink: string = ""
}

let TYPES = [
    "angular", "react", "java", "javascript", "cpp", "python", "de", "news", "linux", "windows", "quantum", "chemistry", "physics", "mathematics", "robotics", "software", "hardware"
]