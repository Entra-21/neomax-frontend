import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { Routine } from '../../services/interfaces';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-routine',
  standalone: true,
  imports: [CommonModule, HeaderComponent],
  templateUrl: './routine.component.html',
  styleUrl: './routine.component.css'
})
export class RoutineComponent {

  workoutId: number = 0;
  routineId: number = 0;
  routine?: Routine;

  constructor(public api: ApiService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.workoutId = +params['workoutId'];
      this.routineId = +params['routineId'];
    });
    this.api.getRoutineById(this.workoutId, this.routineId).subscribe(data => {
      this.routine = data;
    });
    return console.log(this.routine);
  }
}
