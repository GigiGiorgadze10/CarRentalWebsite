import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CarsComponent } from './pages/cars/cars.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'cars', component: CarsComponent}
];
