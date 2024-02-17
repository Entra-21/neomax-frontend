import { Component } from '@angular/core';
import { AddButtonComponent } from '../add-button/add-button.component';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [AddButtonComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
