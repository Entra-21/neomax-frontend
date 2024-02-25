import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../services/api.service';
import { Router } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { OptionsButtonComponent } from '../options-button/options-button.component';
import { AddButtonComponent } from '../add-button/add-button.component';
import { DietModalMenuComponent } from './diet-modal-menu/diet-modal-menu.component';
import { Diet } from '../../services/interfaces';


@Component({
  selector: 'app-diets',
  standalone: true,
  imports: [CommonModule, HeaderComponent, OptionsButtonComponent, AddButtonComponent, DietModalMenuComponent],
  templateUrl: './diets.component.html',
  styleUrl: './diets.component.css'
})
export class DietsComponent {

  constructor(public api: ApiService, private router: Router) { }

  @ViewChild(DietModalMenuComponent) dietModalMenu!: DietModalMenuComponent;

  title: string = 'Diets';
  diets: any[] = [];

  ngOnInit() {
    this.api.getDiets().subscribe(data => {
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
    this.api.getDiets().subscribe(
      (diets: Diet[]) => {
        this.diets = diets;
      },
      (error: any) => {
        console.error('Error refreshing diets:', error)
      }
    )
  }
}
