import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Car, CarService } from '../../services/car.service';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-cars',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {
  cars: Car[] = [];

  constructor(private carService: CarService, private router: Router) {}

  ngOnInit(): void {
    this.cars = this.carService.getCars();
  }

  goToRentCar(carId: number): void {
    this.router.navigate(['/rent-car', carId]); // Navigate to the RentCarComponent with the car's ID
  }
}
