import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../services/api.service';
import { Workout } from '../../services/interfaces';
import { Router } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { AddButtonComponent } from '../add-button/add-button.component';
import { WorkoutModalMenuComponent } from './workout-modal-menu/workout-modal-menu.component';
import { RoutineModalMenuComponent } from './routine-modal-menu/routine-modal-menu.component';

@Component({
  selector: 'app-workouts',
  standalone: true,
  imports: [CommonModule, HeaderComponent, AddButtonComponent, WorkoutModalMenuComponent, RoutineModalMenuComponent],
  templateUrl: './workouts.component.html',
  styleUrl: './workouts.component.css'
})
export class WorkoutsComponent {

  constructor(public api: ApiService, private router: Router) { }

  @ViewChild(WorkoutModalMenuComponent) workoutModalMenu!: WorkoutModalMenuComponent;

  @ViewChild(RoutineModalMenuComponent) routineModalMenu!: RoutineModalMenuComponent;

  title: string = 'Workouts';
  workouts: Workout[] = [];

  ngOnInit() {
    this.api.getWorkouts().subscribe(data => {
      this.workouts = data;
    })
  }

  openWorkoutModal() {
    this.workoutModalMenu.openModal();
  }

  openRoutineModal(workoutId: number) {
    this.routineModalMenu.openModal(workoutId);
  }


  navigateToRoutine(workoutId: number, routineId: number) {
    this.router.navigate([`/workouts/${workoutId}/${routineId}`])
  }

  refreshWorkouts(): void {
    this.api.getWorkouts().subscribe(
      (workouts: Workout[]) => {
        this.workouts = workouts;
      },
      (error: any) => {
        console.error('Error refreshing workouts:', error)
      }
    )
  }
}
