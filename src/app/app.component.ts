import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WorkoutCardComponent } from './workout-card/workout-card.component';
import { WorkoutCompDarModeComponent } from './workout-comp-dark.mode/workout-comp-dark.mode.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, WorkoutCardComponent, WorkoutCompDarModeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'neomax-frontend';
}
