import { Component } from '@angular/core';
import { ApiService } from '../../shared/services/api.service';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {

  constructor(private api: ApiService) { }

  darkThemeToggle() {
    if (!this.api.darkTheme) {
      this.api.darkTheme = true;
    } else {
      this.api.darkTheme = false;
    }
  }
}
