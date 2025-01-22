import { Component, OnInit } from '@angular/core';
import { Car, CarService } from '../../services/car-list.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cars',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cars.component.html',
  styleUrl: './cars.component.css'
})
export class CarsComponent implements OnInit {
  cars: Car[] = [];

  constructor(private carService: CarService) {}

  ngOnInit(): void {
    this.cars = this.carService.getCars();
  }
}
