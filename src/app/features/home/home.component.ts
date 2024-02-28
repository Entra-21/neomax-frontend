import { Component } from '@angular/core';
import { WorkoutsService } from '../workouts/services/workouts.service';
import { DietsService } from '../diets/services/diets.service';
import { Diet, Workout } from '../../shared/services/interfaces';
import { CommonModule } from '@angular/common';
import { AddButtonComponent } from '../../shared/components/add-button/add-button.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, AddButtonComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  constructor(private apiWorkouts: WorkoutsService, private apiDiets: DietsService) { }

  activeWorkout?: Workout | undefined;
  activeDiet?: Diet | undefined;

  ngOnInit(): void {
    this.apiWorkouts.getActiveWorkout().subscribe(
      (workout: Workout | undefined) => {
        this.activeWorkout = workout;
        console.log(workout)
      },
      (error) => {
        console.error('Error getting active workout:', error);
      }
    );

    this.apiDiets.getActiveDiet().subscribe(
      (diet: Diet | undefined) => {
        this.activeDiet = diet;
        console.log(diet)
      },
      (error) => {
        console.error('Error getting active diet:', error);
      }
    );
  }

}
