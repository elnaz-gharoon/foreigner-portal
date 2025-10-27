import { Component } from '@angular/core';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-carosel',
  imports: [NgbCarouselModule],
  templateUrl: './carosel.component.html',
  styleUrl: './carosel.component.scss'
})
export class CaroselComponent {
  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
}
