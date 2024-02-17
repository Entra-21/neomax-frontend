import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { DietComponent } from './components/diet/diet.component';
import { WorkoutsComponent } from './components/workouts/workouts.component';
import { RoutineComponent } from './components/routine/routine.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'diet', component: DietComponent },
    { path: 'workouts', component: WorkoutsComponent },
    { path: 'workouts/:workoutId/:routineId', component: RoutineComponent }
];
