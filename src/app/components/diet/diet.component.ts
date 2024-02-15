import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-diet',
  standalone: true,
  imports: [CommonModule, HeaderComponent],
  templateUrl: './diet.component.html',
  styleUrl: './diet.component.css'
})
export class DietComponent {

  constructor(private api: ApiService) {}

  title: string = 'Diets';
  diets: any[] = [];

  ngOnInit() {
    this.api.getTestData().subscribe(data => {
      this.diets = data.diets;
    })
  }
}
