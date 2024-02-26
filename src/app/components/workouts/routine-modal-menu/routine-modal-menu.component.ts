import { CommonModule } from '@angular/common';
import { Component, Output, EventEmitter, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ApiService } from '../../../services/api.service';
import { Routine } from '../../../services/interfaces';


@Component({
  selector: 'app-routine-modal-menu',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './routine-modal-menu.component.html',
  styleUrl: './routine-modal-menu.component.css'
})
export class RoutineModalMenuComponent {

  @Output() routineCreated = new EventEmitter<Routine>();
  createNewRoutine = new EventEmitter<Routine>();

  routineForm?: FormGroup;
  workoutId?: number;
  isOpen: boolean = false;

  constructor(public api: ApiService, private formBuilder: FormBuilder) {
    this.routineForm = this.formBuilder.group({
      title: ['', Validators.required]
    })
  }

  openModal(workoutId: number) {
    this.isOpen = true;
    this.workoutId = workoutId;
  }


  closeModal() {
    this.isOpen = false;
  }

  onSubmit(): void {
    if (this.routineForm?.valid && this.workoutId !== undefined) {
      const newRoutine: Partial<Routine> = {
        title: this.routineForm?.value.title,
        sessions: [],
        workout: this.workoutId
      };
      this.api.createRoutine(newRoutine as Routine)
        .subscribe(
          (response: any) => {
            console.log('Routine created successfully:', response);
            this.routineForm?.reset();
            this.closeModal();
            this.routineCreated.emit(newRoutine as Routine);
          },
          (error: any) => {
            console.error('Error creating workout:', error);
            console.log(newRoutine)
          }
        );
    }
  }

}