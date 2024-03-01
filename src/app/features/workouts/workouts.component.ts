import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkoutsService } from './services/workouts.service';
import { Workout } from '../../shared/services/interfaces';
import { Router } from '@angular/router';
import { WorkoutModalMenuComponent } from './components/workout-modal-menu/workout-modal-menu.component';
import { RoutineModalMenuComponent } from './components/routine-modal-menu/routine-modal-menu.component';
import { HeaderComponent } from '../../shared/components/header/header.component';
import { AddButtonComponent } from '../../shared/components/add-button/add-button.component';
import { ApiService } from '../../shared/services/api.service';
import { OptionsButtonComponent } from '../../shared/components/options-button/options-button.component';

@Component({
  selector: 'app-workouts',
  standalone: true,
  imports: [CommonModule, HeaderComponent, AddButtonComponent, WorkoutModalMenuComponent, RoutineModalMenuComponent, OptionsButtonComponent],
  templateUrl: './workouts.component.html',
  styleUrl: './workouts.component.css'
})
export class WorkoutsComponent {

  constructor(public apiWorkouts: WorkoutsService, public api: ApiService, private router: Router) { }

  @ViewChild(WorkoutModalMenuComponent) workoutModalMenu!: WorkoutModalMenuComponent;

  @ViewChild(RoutineModalMenuComponent) routineModalMenu!: RoutineModalMenuComponent;

  title: string = 'Workouts';
  workouts: Workout[] = [];

  ngOnInit() {
    this.apiWorkouts.getWorkouts().subscribe(data => {
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
    this.apiWorkouts.getWorkouts().subscribe(
      (workouts: Workout[]) => {
        this.workouts = workouts;
      },
      (error: any) => {
        console.error('Error refreshing workouts:', error)
      }
    )
  }
}
