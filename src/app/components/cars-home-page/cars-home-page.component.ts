import { Component, OnInit } from '@angular/core';
import { CarService, Car } from '../../services/car.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cars-home-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cars-home-page.component.html',
  styleUrls: ['./cars-home-page.component.css']
})
export class CarsHomePageComponent implements OnInit {
  cars: Car[] = [];

  constructor(private carService: CarService, private router: Router) {}

  ngOnInit(): void {
    this.cars = this.carService.getCars();
  }

  goToRentCar(): void {
    this.router.navigate(['/rent-car']);
  }
}
