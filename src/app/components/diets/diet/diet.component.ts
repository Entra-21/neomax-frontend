import { Component, ViewChild } from '@angular/core';
import { ApiService } from '../../../services/api.service';
import { ActivatedRoute } from '@angular/router';
import { Diet } from '../../../services/interfaces';
import { CommonModule } from '@angular/common';
import { DietDayContainerComponent } from './diet-day-container/diet-day-container.component';
import { MealModalMenuComponent } from './meal-modal-menu/meal-modal-menu.component';
import { DayModalMenuComponent } from './day-modal-menu/day-modal-menu.component';

@Component({
  selector: 'app-diet',
  standalone: true,
  imports: [CommonModule, DietDayContainerComponent, DayModalMenuComponent],
  templateUrl: './diet.component.html',
  styleUrl: './diet.component.css'
})
export class DietComponent {

  dietId: number = 0;
  diet?: Diet;

  @ViewChild(DayModalMenuComponent) dayModalMenu!: DayModalMenuComponent;

  constructor(public api: ApiService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.dietId = +params['dietId'];
    });
    this.api.getDietById(this.dietId).subscribe(data => {
      this.diet = data;
    });
  }

  openDayModal() {
    this.dayModalMenu.openModal(this.dietId);
  }

  refreshDays(): void {
    this.api.getDietById(this.dietId).subscribe(
      (diet?: Diet) => {
        this.diet = diet;
      },
      (error: any) => {
        console.error('Error refreshing workouts:', error)
      }
    )
  }
}
