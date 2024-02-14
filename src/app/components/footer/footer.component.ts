import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})

export class FooterComponent {

  routeSelected: string = 'home'

  constructor(private router: Router) { }



  navigateToRoute(route: string) {
    this.router.navigate([`${route}`]);
    if (this.routeSelected !== route) {
      this.routeSelected = route;
    }
  }
}
