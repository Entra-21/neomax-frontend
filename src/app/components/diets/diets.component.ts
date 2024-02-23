import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../services/api.service';
import { Router } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { OptionsButtonComponent } from '../options-button/options-button.component';
import { AddButtonComponent } from '../add-button/add-button.component';


@Component({
  selector: 'app-diets',
  standalone: true,
  imports: [CommonModule, HeaderComponent, OptionsButtonComponent, AddButtonComponent],
  templateUrl: './diets.component.html',
  styleUrl: './diets.component.css'
})
export class DietsComponent {

  constructor(public api: ApiService, private router: Router) { }

  title: string = 'Diets';
  diets: any[] = [];

  ngOnInit() {
    this.api.getDiets().subscribe(data => {
      this.diets = data;
    })
  }

  navigateToDiet(dietId:number) {
    this.router.navigate([`/diets/${dietId}`])
  }
}
