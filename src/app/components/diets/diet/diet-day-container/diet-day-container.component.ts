import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Day } from '../../../../services/interfaces';
import { ApiService } from '../../../../services/api.service';

@Component({
  selector: 'app-diet-day-container',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './diet-day-container.component.html',
  styleUrl: './diet-day-container.component.css'
})
export class DietDayContainerComponent {

  constructor(public api: ApiService) { }

  isExpanded: boolean = false;

  @Input() day?: Day;

  toggleExpansion() {
    this.isExpanded = !this.isExpanded;
  }
}
