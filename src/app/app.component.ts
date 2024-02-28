import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ApiService } from './shared/services/api.service';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './shared/components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  constructor(public api: ApiService) { }

  title = 'neomax-frontend';
}
