import { bootstrapApplication, BrowserModule } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/components/app-component/app.component';
import { APP_ID } from '@angular/core';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));

  bootstrapApplication(AppComponent, {
  providers: [
    BrowserModule,
    { provide: APP_ID, useValue: 'my-app' }
  ]
});
