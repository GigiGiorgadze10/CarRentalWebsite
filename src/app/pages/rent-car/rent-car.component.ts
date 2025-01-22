import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Car, CarService } from '../../services/car.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-rent-car',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './rent-car.component.html',
  styleUrl: './rent-car.component.css'
})
export class RentCarComponent implements OnInit {

  cars: Car[] = [];
  
    constructor(private carService: CarService, private router: Router) {}
  
    ngOnInit(): void {
      this.cars = this.carService.getCars();
    }

    goToRentCar(): void {
      this.router.navigate(['/rent-car']);
    }
  
}
