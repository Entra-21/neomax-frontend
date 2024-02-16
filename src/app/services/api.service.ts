import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl = 'assets/db.json'

  constructor(private http: HttpClient) { }

  getTestData() {
    return this.http.get<any>(this.apiUrl)
  }
}