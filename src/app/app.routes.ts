import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CarsComponent } from './pages/cars/cars.component';
import { RentCarComponent } from './pages/rent-car/rent-car.component';
import { UserComponent } from './pages/user/user.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'cars', component: CarsComponent},
    { path: 'rent-car', component: RentCarComponent },
    { path: 'user', component: UserComponent },
];
