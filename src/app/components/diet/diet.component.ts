import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../services/api.service';
import { HeaderComponent } from '../header/header.component';
import { OptionsButtonComponent } from '../options-button/options-button.component';
import { AddButtonComponent } from '../add-button/add-button.component';


@Component({
  selector: 'app-diet',
  standalone: true,
  imports: [CommonModule, HeaderComponent, OptionsButtonComponent, AddButtonComponent],
  templateUrl: './diet.component.html',
  styleUrl: './diet.component.css'
})
export class DietComponent {

  constructor(private api: ApiService) { }

  title: string = 'Diets';
  diets: any[] = [];

  ngOnInit() {
    this.api.getTestData().subscribe(data => {
      this.diets = data.diets;
    })
  }
}
