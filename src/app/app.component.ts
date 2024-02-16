import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
<<<<<<< HEAD
import { SearchBarComponent } from './search-bar/search-bar.component';
=======
import { FooterComponent } from './components/footer/footer.component';
>>>>>>> main

@Component({
  selector: 'app-root',
  standalone: true,
<<<<<<< HEAD
  imports: [RouterOutlet, SearchBarComponent],
=======
  imports: [RouterOutlet, FooterComponent],
>>>>>>> main
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'neomax-frontend';
}
