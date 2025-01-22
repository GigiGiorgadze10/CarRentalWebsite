import { Injectable } from '@angular/core';

export interface Car {
  name: string;
  image: string;
  type: string;
  price: number;
  features: string[];
}

@Injectable({
  providedIn: 'root',
})
export class CarService {
  private cars: Car[] = [
    { name: 'Mercedes', image: "assets/images/pngwing.png", type: 'SUV', price: 100, features: ['Automat', 'PB 95', 'Air Conditioner'] },
    { name: 'Toyota', image: "assets/images/pngwing.com.png", type: 'Sedan', price: 25, features: ['Automat', 'PB 95', 'Air Conditioner'] },
    { name: 'Nissan', image: "assets/images/pngwing.com (5).png", type: 'SUV', price: 45, features: ['Automat', 'PB 95', 'Air Conditioner'] },
    { name: 'Lamborghini', image: "assets/images/pngwing.com (4).png", type: 'Sport', price: 150, features: ['Automat', 'PB 95', 'Air Conditioner'] },
    { name: 'Chervolet', image: "assets/images/pngwing.com (3).png", type: 'Hatchback', price: 35, features: ['Automat', 'PB 95', 'Air Conditioner'] },
    { name: 'Mercedes', image: "assets/images/pngwing.com (1).png", type: 'Sedan', price: 70, features: ['Automat', 'PB 95', 'Air Conditioner'] },
  ];

  constructor() {}

  getCars() {
    return this.cars;
  }
}
