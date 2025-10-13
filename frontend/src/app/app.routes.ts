import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, Routes, withNavigationErrorHandler } from '@angular/router';
import { AppComponent } from './components/app-component/app.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: AppComponent },
  { path: '**', component: NotFoundComponent }
];

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(
      routes,
      withNavigationErrorHandler((error: any) => {
        console.error('Navigation error:', error);
      })
    )
  ]
});