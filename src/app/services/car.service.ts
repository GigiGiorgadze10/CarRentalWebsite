import { Injectable } from '@angular/core';

export interface Car {
  id: number;
  name: string;
  image: string;
  price: number;
  type: string;
}

@Injectable({
  providedIn: 'root',
})
export class CarService {
  private cars: Car[] = [
    {id:0, name: 'Mercedes', image: "assets/images/pngwing.png", type: 'SUV', price: 100},
    {id:1, name: 'Toyota', image: "assets/images/pngwing.com.png", type: 'Sedan', price: 25},
    {id:2, name: 'Nissan', image: "assets/images/pngwing.com (5).png", type: 'SUV', price: 45},
    {id:3, name: 'Lamborghini', image: "assets/images/pngwing.com (4).png", type: 'sedan', price: 150 },
    {id:4, name: 'Chevrolet', image: "assets/images/pngwing.com (3).png", type: 'sedan', price: 35, },
    {id:5, name: 'Mercedes', image: "assets/images/pngwing.com (1).png", type: 'Sedan', price: 70},
  ];

  getCars(): Car[] {
    return this.cars;
  }

  getCarById(id: number): Car | null {
    return this.cars.find(car => car.id === id) || null;
  }
}
