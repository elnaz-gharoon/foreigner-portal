import { Component } from '@angular/core';
import { CaroselComponent } from '../../components/carosel/carosel.component';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-main-page',
  imports: [CaroselComponent, RouterLink],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss'
})
export class MainPageComponent {

}
