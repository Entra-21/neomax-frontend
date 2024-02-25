import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SearchBarComponent } from '../search-bar/search-bar.component';
import { Exercise, ExerciseSession, Routine } from '../../services/interfaces';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-exercises',
  standalone: true,
  imports: [CommonModule, SearchBarComponent],
  templateUrl: './exercises.component.html',
  styleUrl: './exercises.component.css'
})
export class ExercisesComponent {

  constructor(public api: ApiService) { }

  @Input() currentRoutine?: Routine;
  @Output() routineUpdated = new EventEmitter<Routine>();
  @Output() alterationStatus = new EventEmitter<boolean>();

  isShown: boolean = false;
  exercises: Exercise[] = [];
  isRoutineAltered: boolean = false;

  ngOnInit() {
    this.api.getExercises().subscribe(data => {
      this.exercises = data;
    })
  }

  createNewExerciseSession(exercise: Exercise): void {
    const newSession: Partial<ExerciseSession> = {
      routine: this.currentRoutine?.id,
      exercise: exercise,
      reps: 0,
      sets: 0,
      weight: 0
    };
    this.currentRoutine?.sessions.push(newSession as ExerciseSession);
    this.isRoutineAltered = true;
    this.hideExercises();
  }

  filterExercises() {
    const existingExercisesIds = this.currentRoutine?.sessions.map(session => session.exercise.id);
    this.exercises = this.exercises.filter(exercise => !existingExercisesIds?.includes(exercise.id));
  }

  showExercises() {
    this.isShown = true;
    this.filterExercises();
  }

  hideExercises() {
    this.isShown = false;
    this.routineUpdated.emit(this.currentRoutine);
    this.alterationStatus.emit(this.isRoutineAltered);
  }

}
