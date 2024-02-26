import { CommonModule } from '@angular/common';
import { Component, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ApiService } from '../../../../services/api.service';
import { Day } from '../../../../services/interfaces';

@Component({
  selector: 'app-day-modal-menu',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './day-modal-menu.component.html',
  styleUrl: './day-modal-menu.component.css'
})
export class DayModalMenuComponent {

  @Output() dayCreated = new EventEmitter<Day>();

  dayForm?: FormGroup;
  dietId?: number;

  constructor(public api: ApiService, private formBuilder: FormBuilder) {
    this.dayForm = this.formBuilder.group({
      name: ['', Validators.required],
    })
  }

  isOpen: boolean = false;

  openModal(dietId: number) {
    this.isOpen = true;
    this.dietId = dietId;
  }

  closeModal() {
    this.isOpen = false;
  }

  onSubmit(): void {
    if (this.dayForm?.valid && this.dietId !== undefined) {
      const newDay: Partial<Day> = {
        name: this.dayForm?.value.name,
        meals: [],
        diet: this.dietId
      };
      this.api.createDay(newDay as Day)
        .subscribe(
          (response: any) => {
            console.log('Day created successfully:', response);
            this.dayForm?.reset();
            this.closeModal();
            this.dayCreated.emit(newDay as Day);
          },
          (error: any) => {
            console.error('Error creating day:', error);
          }
        );
    }
  }
}
