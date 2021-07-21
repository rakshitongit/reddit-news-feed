import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewsPageDetailsComponent } from './pages/news-page-details/news-page-details.component';
import { NewsPageComponent } from './pages/news-page/news-page.component';
import { NewsResolver } from './resolvers/news.resolver';

const routes: Routes = [
  { path: 'news', component: NewsPageComponent, resolve: {news: NewsResolver} },
  { path: 'news-details/:id', component: NewsPageDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
