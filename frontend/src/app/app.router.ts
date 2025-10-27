import { Routes } from '@angular/router';
import { NotFoundComponent } from './pages/not-found-page/not-found.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { SearchProfessionsComponent } from './pages/search-professions-page/search-professions.component';

export const routes: Routes = [
  { path: '', redirectTo: 'main-page', pathMatch: 'full' },
  { path: 'main-page', component: MainPageComponent, pathMatch: 'full' },
  { path: 'about', component: AboutPageComponent, pathMatch: 'full' },
  { path: 'search-professions', component: SearchProfessionsComponent, pathMatch: 'full' },
  { path: '**', component: NotFoundComponent }
];