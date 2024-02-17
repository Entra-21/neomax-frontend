import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { TestData, Routine, Workout } from './interfaces';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl = 'assets/db.json'

  constructor(private http: HttpClient) { }

  getTestData(): Observable<TestData> {
    return this.http.get<TestData>(this.apiUrl);
  }

  getWorkoutById(id: number): Observable<Workout | undefined> {
    return this.getTestData().pipe(
      map((data: TestData) => data.workouts.find(workout => workout.id === id))
    );
  }

  getRoutineById(workoutId: number, routineId: number): Observable<Routine | undefined> {
    return this.getWorkoutById(workoutId).pipe(
      map((data: Workout | undefined) => data?.routines.find(routine => routine.id === routineId))
    );
  }
}
