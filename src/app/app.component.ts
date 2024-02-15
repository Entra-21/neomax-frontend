import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WorkoutCardComponent } from './componentes/workout-card/workout-card.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, WorkoutCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'neomax-frontend';
}
