import { Component, inject } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { HeaderComponent } from '../header/header.component';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [
        CommonModule,
        MatButtonModule,
        TranslatePipe,
        HeaderComponent
    ],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent {
  private translate = inject(TranslateService);

    constructor() {
        this.translate.addLangs(['de', 'en']);
        this.translate.setFallbackLang('en');
        this.translate.use('en');
    }

    onLanguageSwitch() {
      console.log('>>>>>>>>>>>>>>>>', this.translate.getCurrentLang());
      this.translate.use(this.translate.getCurrentLang() === 'en' ? 'de' : 'en');
    }
}
