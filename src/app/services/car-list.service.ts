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
    { name: 'Mercedes', image: "assets/images/11452781.png", type: 'Sedan', price: 70, features: ['Automat', 'PB 95', 'Air Conditioner'] },
    { name: 'Mercedes', image: "assets/images/11452775.png", type: 'Sedan', price: 70, features: ['Automat', 'PB 95', 'Air Conditioner'] },
    { name: 'Mercedes', image: "assets/images/365c2d35-bb81-4660-b0f9-4c926fc45406.png", type: 'Sedan', price: 70, features: ['Automat', 'PB 95', 'Air Conditioner'] },
  ];

  private selectedCar: Car | null = null;

  constructor() {}

  getCars(): Car[] {
    return this.cars;
  }

  setSelectedCar(car: Car): void {
    this.selectedCar = car;
  }

  getSelectedCar(): Car | null {
    return this.selectedCar;
  }
}
