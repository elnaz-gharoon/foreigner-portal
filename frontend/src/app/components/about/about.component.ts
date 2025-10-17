import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-about',
  imports: [CommonModule, TranslatePipe],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  private translate = inject(TranslateService);

  onLanguageSwitch() {
      console.log('>>>>>>>>>>>>>>>>', this.translate.getCurrentLang());
      this.translate.use(this.translate.getCurrentLang() === 'en' ? 'de' : 'en');
    }
}
