import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { UrlAnalyticsComponent } from './pages/url-analytics/url-analytics.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent, title: 'Home Page' },
    { path: 'url-analytic', component: UrlAnalyticsComponent, title: 'Url Analytic' },
    { path: '**', component: NotFoundComponent },
];
