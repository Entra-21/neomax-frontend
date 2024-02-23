import { CommonModule } from '@angular/common';
import { Component, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ApiService } from '../../../services/api.service';
import { Workout } from '../../../services/interfaces';

@Component({
  selector: 'app-workout-modal-menu',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './workout-modal-menu.component.html',
  styleUrl: './workout-modal-menu.component.css'
})
export class WorkoutModalMenuComponent {

  @Output() workoutCreated = new EventEmitter<Workout>();

  workoutForm?: FormGroup;

  constructor(public api: ApiService, private formBuilder: FormBuilder) {
    this.workoutForm = this.formBuilder.group({
      name: ['', Validators.required],
      active: [false],
    })
  }

  isOpen: boolean = false;

  openModal() {
    this.isOpen = true;
  }

  closeModal() {
    this.isOpen = false;
  }

  onSubmit(): void {
    if (this.workoutForm?.valid) {
      const newWorkout: Partial<Workout> = {
        name: this.workoutForm?.value.name,
        active: this.workoutForm?.value.active
      };
      this.api.createWorkout(newWorkout as Workout)
        .subscribe(
          (response: any) => {
            console.log('Workout created successfully:', response);
            this.workoutForm?.reset();
            this.closeModal();
            this.workoutCreated.emit(newWorkout as Workout);
          },
          (error: any) => {
            console.error('Error creating workout:', error);
          }
        );
    }
  }
}
