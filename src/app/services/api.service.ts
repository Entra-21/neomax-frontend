import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Routine, Workout, Diet, Exercise } from './interfaces';
import axios from 'axios';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl = "http://127.0.0.1:8000/api"

  private fakeApiUrl = 'assets/db.json'

  darkTheme: boolean = true;
  darkTheme: boolean = true;

  constructor(private http: HttpClient) { }

  // getTestData(): Observable<TestData> {
  //   return this.http.get<TestData>(this.apiUrl);
  // }

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

  getRoutineById(workoutId: number, routineId: number): Observable<Routine | undefined> {
    return this.getWorkoutById(workoutId).pipe(
      map((data: Workout | undefined) => data?.routines.find(routine => routine.id === routineId))
    );
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

  // createExerciseSession(exerciseId: number): Observable<any> {
  //   return new Observable<any>(observer => {
  //     axios.post(`${this.apiUrl}/routines/`, routine)
  //       .then(response => {
  //         observer.next(response.data);
  //         observer.complete();
  //       })
  //       .catch(error => {
  //         observer.error(error);
  //       })
  //   });
  // }

  getDiets(): Observable<Diet[]> {
    return new Observable<Diet[]>(observer => {
      axios.get<Diet[]>(`${this.apiUrl}/diets/`)
        .then(response => {
          observer.next(response.data);
          observer.complete();
        })
        .catch(error => {
          observer.error(error);
        })
    });
  }

  getDietById(id: number): Observable<Diet | undefined> {
    return new Observable<Diet | undefined>(observer => {
      axios.get<Diet[]>(`${this.apiUrl}/diets/`)
        .then(response => {
          const diet = response.data.find((d: Diet) => d.id === id);
          observer.next(diet);
          observer.complete();
        })
        .catch(error => {
          observer.error(error);
        });
    });
  }

  createDiet(diet: Diet): Observable<any> {
    return new Observable<any>(observer => {
      axios.post(`${this.apiUrl}/diets/`, diet)
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