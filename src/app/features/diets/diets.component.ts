import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DietsService } from './services/diets.service';
import { Diet } from '../../shared/services/interfaces';
import { Router } from '@angular/router';
import { DietModalMenuComponent } from './components/diet-modal-menu/diet-modal-menu.component';
import { HeaderComponent } from '../../shared/components/header/header.component';
import { AddButtonComponent } from '../../shared/components/add-button/add-button.component';
import { OptionsButtonComponent } from '../../shared/components/options-button/options-button.component';
import { ApiService } from '../../shared/services/api.service';


@Component({
  selector: 'app-diets',
  standalone: true,
  imports: [CommonModule, HeaderComponent, AddButtonComponent, OptionsButtonComponent, DietModalMenuComponent],
  templateUrl: './diets.component.html',
  styleUrl: './diets.component.css'
})
export class DietsComponent {

  constructor(public apiDiets: DietsService, public api: ApiService, private router: Router) { }

  @ViewChild(DietModalMenuComponent) dietModalMenu!: DietModalMenuComponent;

  title: string = 'Diets';
  diets: any[] = [];

  ngOnInit() {
    this.apiDiets.getDiets().subscribe(data => {
      this.diets = data;
    })
  }

  navigateToDiet(dietId: number) {
    this.router.navigate([`/diets/${dietId}`])
  }

  openDietModal() {
    this.dietModalMenu.openModal();
  }

  refreshWorkouts(): void {
    this.apiDiets.getDiets().subscribe(
      (diets: Diet[]) => {
        this.diets = diets;
      },
      (error: any) => {
        console.error('Error refreshing diets:', error)
      }
    )
  }
}
