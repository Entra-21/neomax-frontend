import { Component, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Diet } from '../../../services/interfaces';
import { ApiService } from '../../../services/api.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-diet-modal-menu',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './diet-modal-menu.component.html',
  styleUrl: './diet-modal-menu.component.css'
})
export class DietModalMenuComponent {

  @Output() dietCreated = new EventEmitter<Diet>();

  dietForm?: FormGroup;

  constructor(public api: ApiService, private formBuilder: FormBuilder) {
    this.dietForm = this.formBuilder.group({
      id: [1, Validators.required],
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
    if (this.dietForm?.valid) {
      const newDiet: Partial<Diet> = {
        name: this.dietForm?.value.name,
        active: this.dietForm?.value.active,
        days: []
      };
      this.api.createDiet(newDiet as Diet)
        .subscribe(
          (response: any) => {
            console.log('Diet created successfully:', response);
            this.dietForm?.reset();
            this.closeModal();
            this.dietCreated.emit(newDiet as Diet);
          },
          (error: any) => {
            console.error('Error creating diet:', error);
          }
        );
    }
  }
}
