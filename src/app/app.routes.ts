import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { DietComponent } from './components/diet/diet.component';

export const routes: Routes = [{ path: 'home', component: HomeComponent }, { path: 'diet', component: DietComponent }];
