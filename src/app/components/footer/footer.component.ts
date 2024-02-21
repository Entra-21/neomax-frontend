import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { filter } from 'rxjs';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})

export class FooterComponent {

  routeSelected: string = 'home'

  constructor(private router: Router, public api: ApiService) { }

  ngOnInit() {
    this.router.events.pipe(
      filter((event): event is NavigationEnd => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      const segments = event.url.split('/');
      this.routeSelected = segments[1];
    })
  }

  navigateToRoute(route: string) {
    this.router.navigate([`${route}`]);
  }
}
