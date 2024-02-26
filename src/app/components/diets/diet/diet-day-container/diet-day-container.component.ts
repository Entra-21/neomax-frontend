import { CommonModule } from '@angular/common';
import { Component, Input, ViewChild } from '@angular/core';
import { Day, Meal } from '../../../../services/interfaces';
import { ApiService } from '../../../../services/api.service';
import { MealModalMenuComponent } from '../meal-modal-menu/meal-modal-menu.component';

@Component({
  selector: 'app-diet-day-container',
  standalone: true,
  imports: [CommonModule, MealModalMenuComponent],
  templateUrl: './diet-day-container.component.html',
  styleUrl: './diet-day-container.component.css'
})
export class DietDayContainerComponent {

  @ViewChild(MealModalMenuComponent) mealModalMenu!: MealModalMenuComponent;

  constructor(public api: ApiService) { }

  isExpanded: boolean = false;

  @Input() day?: Day;
  // isThereAnyNewMeal: boolean = false;

  toggleExpansion() {
    this.isExpanded = !this.isExpanded;
  }

  openMealModal() {
    this.mealModalMenu.openModal(this.day);
  }

  refreshMeals(newMeal: Meal) {
    // this.day = currentDay;
    // this.isThereAnyNewMeal = true;]
    if (newMeal && this.day) {
      newMeal.day = this.day?.id;
      this.day?.meals.push(newMeal as Meal);
      this.api.updateDay(this.day).subscribe(
        () => {
          console.log('Sessions added successfully');
          // this.isThereAnyNewMeal = false;
        },
        (error) => {
          console.error('Error adding sessions:', error);
        }
      )
    } else {
      console.error('Routine is undefined.')
    }
  }

  // saveAlterations() {
  //   if (this.day) {
  //     this.api.updateDay(this.day).subscribe(
  //       () => {
  //         console.log('Sessions added successfully');
  //         this.isThereAnyNewMeal = false;
  //       },
  //       (error) => {
  //         console.error('Error adding sessions:', error);
  //       }
  //     )
  //   } else {
  //     console.error('Routine is undefined.')
  //   }
  // }
}
