import { Routes } from '@angular/router';
import { AppComponent } from './components/app-component/app.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: AppComponent },
  { path: '**', component: NotFoundComponent }
];