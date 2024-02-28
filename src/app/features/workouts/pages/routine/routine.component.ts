import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { WorkoutsService } from '../../services/workouts.service';
import { Routine } from '../../../../shared/services/interfaces';
import { ExercisesComponent } from '../exercises/exercises.component';
import { HeaderComponent } from '../../../../shared/components/header/header.component';
import { ApiService } from '../../../../shared/services/api.service';

@Component({
  selector: 'app-routine',
  standalone: true,
  imports: [CommonModule, HeaderComponent, ExercisesComponent],
  templateUrl: './routine.component.html',
  styleUrl: './routine.component.css'
})
export class RoutineComponent {

  workoutId: number = 0;
  routineId: number = 0;
  routine?: Routine;
  isRoutineAltered: boolean = false;

  constructor(public apiWorkouts: WorkoutsService, public api: ApiService, private route: ActivatedRoute) { }

  @ViewChild(ExercisesComponent) exercisesPage!: ExercisesComponent;

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.workoutId = +params['workoutId'];
      this.routineId = +params['routineId'];
    });
    this.apiWorkouts.getRoutineById(this.workoutId, this.routineId).subscribe(data => {
      this.routine = data;
    });
  }

  showExercises() {
    this.exercisesPage.showExercises();
  }

  onRoutineUpdated(updatedRoutine: Routine): void {
    this.routine = updatedRoutine;
  }

  onAlterations(isRoutineAltered: boolean): void {
    this.isRoutineAltered = isRoutineAltered;
  }

  saveAlterations() {
    if (this.routine) {
      this.apiWorkouts.updateRoutine(this.routine).subscribe(
        () => {
          console.log('Sessions added successfully');
          this.isRoutineAltered = false;
        },
        (error) => {
          console.error('Error adding sessions:', error);
        }
      )
    } else {
      console.error('Routine is undefined.')
    }
  }
}
