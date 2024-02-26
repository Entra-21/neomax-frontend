import { CommonModule } from '@angular/common';
import { Component, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ApiService } from '../../../../services/api.service';
import { Day, Meal } from '../../../../services/interfaces';

@Component({
  selector: 'app-meal-modal-menu',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './meal-modal-menu.component.html',
  styleUrl: './meal-modal-menu.component.css'
})
export class MealModalMenuComponent {

  @Output() mealCreated = new EventEmitter<Meal>();

  mealForm?: FormGroup;
  day?: Day;
  currentDay?: Day;

  constructor(public api: ApiService, private formBuilder: FormBuilder) {
    this.mealForm = this.formBuilder.group({
      name: ['', Validators.required],
      time: [0, Validators.required],
    })
  }

  isOpen: boolean = false;

  openModal(day: Day | undefined) {
    this.currentDay = day;
    this.isOpen = true;
  }

  closeModal() {
    this.isOpen = false;
  }

  createNewMeal(): void {
    const newMeal: Partial<Meal> = {
      name: this.mealForm?.value.name,
      time: this.mealForm?.value.time
    };
    this.mealForm?.reset();
    this.mealCreated.emit(newMeal as Meal);
    this.closeModal();
  }

}
