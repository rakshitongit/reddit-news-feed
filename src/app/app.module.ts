import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewsPageComponent } from './pages/news-page/news-page.component';
import { NewsPageDetailsComponent } from './pages/news-page-details/news-page-details.component';
import { NewsDetailsContentComponent } from './components/news-details-content/news-details-content.component';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';

@NgModule({
  declarations: [
    AppComponent,
    NewsPageComponent,
    NewsPageDetailsComponent,
    NewsDetailsContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxSkeletonLoaderModule.forRoot({ animation: 'pulse', loadingText: 'This item is actually loading...' })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
