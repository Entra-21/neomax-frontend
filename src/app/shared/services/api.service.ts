import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl = "http://127.0.0.1:8000/api"

  private fakeApiUrl = 'assets/db.json'

  darkTheme: boolean = true;

  constructor(private http: HttpClient) { }

  // getTestData(): Observable<any> {
  //   return this.http.get<any>(this.fakeApiUrl);
  // }

}


