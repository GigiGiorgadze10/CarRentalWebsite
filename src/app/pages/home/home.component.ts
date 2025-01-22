import { Component } from '@angular/core';
import { HeroComponent } from '../../components/hero/hero.component';
import { CarsHomePageComponent } from '../../components/cars-home-page/cars-home-page.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeroComponent, CarsHomePageComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
