import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoadingLightComponent } from './components/loading-light/loading-light.component';
import { SigLoginBtnComponent } from './components/sig.login-btn/sig.login-btn.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FooterComponent, LoadingLightComponent, SearchBarComponent,SigLoginBtnComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'neomax-frontend';
}
