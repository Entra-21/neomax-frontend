import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { DietsComponent } from './components/diets/diets.component';
import { WorkoutsComponent } from './components/workouts/workouts.component';
import { RoutineComponent } from './components/workouts/routine/routine.component';
import { ProfileComponent } from './components/profile/profile.component';
import { DietComponent } from './components/diets/diet/diet.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'diets', component: DietsComponent },
    { path: 'diets/:dietId', component: DietComponent },
    { path: 'workouts', component: WorkoutsComponent },
    { path: 'workouts/:workoutId/:routineId', component: RoutineComponent },
    { path: 'profile', component: ProfileComponent }
];
