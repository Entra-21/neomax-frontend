import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../services/api.service';
import { Router } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { AddButtonComponent } from '../add-button/add-button.component';

@Component({
  selector: 'app-workouts',
  standalone: true,
  imports: [CommonModule, HeaderComponent, AddButtonComponent],
  templateUrl: './workouts.component.html',
  styleUrl: './workouts.component.css'
})
export class WorkoutsComponent {

  constructor(public api: ApiService, private router: Router) { }

  title: string = 'Workouts';
  workouts: any[] = [];

  ngOnInit() {
    this.api.getTestData().subscribe(data => {
      this.workouts = data.workouts;
    })
  }

  navigateToRoutine(workoutId:number, routineId: number) {
    this.router.navigate([`/workouts/${workoutId}/${routineId}`])
  }
}
