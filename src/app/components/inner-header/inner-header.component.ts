import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-inner-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './inner-header.component.html',
  styleUrl: './inner-header.component.css'
})
export class InnerHeaderComponent {

  constructor(public api: ApiService) { }

  @Input() pageTitle: string = '';

}
