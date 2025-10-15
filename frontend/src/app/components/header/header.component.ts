import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import {
  NgbDropdownConfig,
  NgbDropdownModule,
} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, NgbDropdownModule],
  providers: [NgbDropdownConfig],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  @Input() title: string = '';

  constructor(config: NgbDropdownConfig) {
    config.placement = 'bottom-start';

    // ✅ optional: prevent Popper from auto-flipping
    config.popperOptions = (options) => ({
      ...options,
      modifiers: [
        ...(options.modifiers || []),
        {
          name: 'flip',
          enabled: false, // disable auto-flipping
        },
        {
          name: 'preventOverflow',
          options: { boundary: 'viewport' }, // keep inside viewport
        },
      ],
    });
  }
}
