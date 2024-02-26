import { Component } from '@angular/core';
import { AddButtonComponent } from '../add-button/add-button.component';
import { ApiService } from '../../services/api.service';
import { Diet, Workout } from '../../services/interfaces';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, AddButtonComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  constructor(private api: ApiService) { }

  activeWorkout?: Workout | undefined;
  activeDiet?: Diet | undefined;

  ngOnInit(): void {
    this.api.getActiveWorkout().subscribe(
      (workout: Workout | undefined) => {
        this.activeWorkout = workout;
        console.log(workout)
      },
      (error) => {
        console.error('Error getting active workout:', error);
      }
    );

    this.api.getActiveDiet().subscribe(
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
