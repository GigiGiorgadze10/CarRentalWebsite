import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car, CarService } from '../../services/car.service';
import { AuthService } from '../../services/auth.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-rent-car',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './rent-car.component.html',
  styleUrls: ['./rent-car.component.css']
})
export class RentCarComponent implements OnInit {
  car: Car | null = null;
  isAuthenticated: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private carService: CarService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.car = this.carService.getCarById(id);

    this.authService.getAuthStatus().subscribe((status) => {
      this.isAuthenticated = status;
    });
  }

  onRentCar(): void {
    if (!this.isAuthenticated) {
      alert('You must sign in to rent a car!');
      return;
    }
    alert('Car rented successfully!');
  }
}
