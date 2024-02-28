import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import axios from 'axios';
import { Exercise, Workout, Routine } from '../../../shared/services/interfaces';

@Injectable({
  providedIn: 'root'
})
export class WorkoutsService {

  private apiUrl = "http://127.0.0.1:8000/api"

  private fakeApiUrl = 'assets/db.json'

  constructor(private http: HttpClient) { }

  getWorkouts(): Observable<Workout[]> {
    return new Observable<Workout[]>(observer => {
      axios.get<Workout[]>(`${this.apiUrl}/workouts/`)
        .then(response => {
          observer.next(response.data);
          observer.complete();
        })
        .catch(error => {
          observer.error(error);
        })
    });
  }

  getWorkoutById(id: number): Observable<Workout | undefined> {
    return new Observable<Workout | undefined>(observer => {
      axios.get<Workout[]>(`${this.apiUrl}/workouts/`)
        .then(response => {
          const workout = response.data.find((w: Workout) => w.id === id);
          observer.next(workout);
          observer.complete();
        })
        .catch(error => {
          observer.error(error);
        });
    });
  }

  getActiveWorkout(): Observable<Workout | undefined> {
    return new Observable<Workout | undefined>(observer => {
      axios.get<Workout[]>(`${this.apiUrl}/workouts/`)
        .then(response => {
          const workout = response.data.find((w: Workout) => w.active === true);
          observer.next(workout);
          observer.complete();
        })
        .catch(error => {
          observer.error(error);
        });
    });
  }

  createWorkout(workout: Workout): Observable<any> {
    return new Observable<any>(observer => {
      axios.post(`${this.apiUrl}/workouts/`, workout)
        .then(response => {
          observer.next(response.data);
          observer.complete();
        })
        .catch(error => {
          observer.error(error);
        })
    });
  }

  getRoutineById(workoutId: number, routineId: number): Observable<Routine | undefined> {
    return this.getWorkoutById(workoutId).pipe(
      map((data: Workout | undefined) => data?.routines.find(routine => routine.id === routineId))
    );
  }

  createRoutine(routine: Routine): Observable<any> {
    return new Observable<any>(observer => {
      axios.post(`${this.apiUrl}/routines/`, routine)
        .then(response => {
          observer.next(response.data);
          observer.complete();
        })
        .catch(error => {
          observer.error(error);
        })
    });
  }

  updateRoutine(routine: Routine): Observable<any> {
    return new Observable<any>(observer => {
      axios.put(`${this.apiUrl}/routines/${routine.id}/`, routine)
        .then(response => {
          observer.next(response.data);
          observer.complete();
          console.log(routine)
        })
        .catch(error => {
          observer.error(error);
          console.log(routine)
        })
    });
  }

  getExercises(): Observable<Exercise[]> {
    return new Observable<Exercise[]>(observer => {
      axios.get<Exercise[]>(`${this.apiUrl}/exercises/`)
        .then(response => {
          observer.next(response.data);
          observer.complete();
        })
        .catch(error => {
          observer.error(error);
        })
    });
  }
}
