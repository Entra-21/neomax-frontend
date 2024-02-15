import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { WorkoutsComponent } from './components/workouts/workouts.component';

export const routes: Routes = [{ path: 'home', component: HomeComponent }, {path: 'workouts', component: WorkoutsComponent}];
