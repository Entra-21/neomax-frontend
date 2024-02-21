import { Component } from '@angular/core';
import { ApiService } from '../../../services/api.service';
import { ActivatedRoute } from '@angular/router';
import { Diet } from '../../../services/interfaces';
import { CommonModule } from '@angular/common';
import { DietDayContainerComponent } from './diet-day-container/diet-day-container.component';

@Component({
  selector: 'app-diet',
  standalone: true,
  imports: [CommonModule, DietDayContainerComponent],
  templateUrl: './diet.component.html',
  styleUrl: './diet.component.css'
})
export class DietComponent {

  dietId: number = 0;
  diet?: Diet;

  constructor(public api: ApiService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.dietId = +params['dietId'];
    });
    this.api.getDietById(this.dietId).subscribe(data => {
      this.diet = data;
    });
  }
}
