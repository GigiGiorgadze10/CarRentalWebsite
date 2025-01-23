import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car, CarService } from '../../services/car.service';
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

  constructor(private route: ActivatedRoute, private carService: CarService) {}

  ngOnInit(): void {
    // Retrieve the ID from the route and fetch the car details
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.car = this.carService.getCarById(id);
  }
}
