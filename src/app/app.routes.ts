import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { DietsComponent } from './features/diets/diets.component';
import { WorkoutsComponent } from './features/workouts/workouts.component';
import { RoutineComponent } from './features/workouts/pages/routine/routine.component';
import { ProfileComponent } from './features/profile/profile.component';
import { DietComponent } from './features/diets/pages/diet/diet.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'diets', component: DietsComponent },
    { path: 'diets/:dietId', component: DietComponent },
    { path: 'profile', component: ProfileComponent },
    { path: 'workouts', component: WorkoutsComponent },
    { path: 'workouts/:workoutId/:routineId', component: RoutineComponent },
];
