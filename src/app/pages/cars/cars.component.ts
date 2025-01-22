import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Car, CarService } from '../../services/car-list.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cars',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cars.component.html',
  styleUrl: './cars.component.css',
})
export class CarsComponent implements OnInit {
  cars: Car[] = [];

  constructor(private carService: CarService, private router: Router) {}

  ngOnInit(): void {
    this.cars = this.carService.getCars();
  }

  goToRentCar(): void {
    this.router.navigate(['/rent-car']);
  }
}
