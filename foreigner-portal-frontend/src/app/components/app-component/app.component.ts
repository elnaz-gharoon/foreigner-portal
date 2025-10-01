import { Component, inject } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { TranslateDirective, TranslatePipe, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MatButtonModule, 
    MatSlideToggleModule, 
    MatIconModule,
    MatCardModule,
    TranslatePipe,
    TranslateDirective
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
