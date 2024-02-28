import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import axios from 'axios';
import { Diet, Day } from '../../../shared/services/interfaces';

@Injectable({
  providedIn: 'root'
})
export class DietsService {

  private apiUrl = "http://127.0.0.1:8000/api"

  private fakeApiUrl = 'assets/db.json'

  constructor(private http: HttpClient) { }

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

  getActiveDiet(): Observable<Diet | undefined> {
    return new Observable<Diet | undefined>(observer => {
      axios.get<Diet[]>(`${this.apiUrl}/diets/`)
        .then(response => {
          const diet = response.data.find((d: Diet) => d.active === true);
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
          console.log(diet)
        })
    });
  }

  createDay(day: Day): Observable<any> {
    return new Observable<any>(observer => {
      axios.post(`${this.apiUrl}/days/`, day)
        .then(response => {
          observer.next(response.data);
          observer.complete();
        })
        .catch(error => {
          observer.error(error);
        })
    });
  }

  updateDay(day: Day): Observable<any> {
    return new Observable<any>(observer => {
      axios.put(`${this.apiUrl}/days/${day.id}/`, day)
        .then(response => {
          observer.next(response.data);
          observer.complete();
          console.log(day)
        })
        .catch(error => {
          observer.error(error);
          console.log(day)
        })
    });
  }
}
