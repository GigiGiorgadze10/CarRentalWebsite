import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Car, CarService } from '../../services/car.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cars',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {
  cars: Car[] = [];
  filteredCars: Car[] = [];
  categories: string[] = ['Sedan', 'Cabriolet', 'Pickup', 'SUV', 'Minivan'];
  selectedCategory: string = '';

  constructor(private carService: CarService, private router: Router) {}

  ngOnInit(): void {
    this.cars = this.carService.getCars();
    this.filteredCars = [...this.cars]; // Initially display all cars
  }

  filterCars(category: string): void {
    this.selectedCategory = category; // Update the selected category
    this.filteredCars = category ? this.cars.filter(car => car.type === category) : [...this.cars];
  }

  goToRentCar(carId: number): void {
    this.router.navigate(['/rent-car', carId]);
  }
}
