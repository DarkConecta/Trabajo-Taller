import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ConsumirApiService { 

  API_URL: string = 'https://jsonplaceholder.typicode.com/';  

  constructor(private http: HttpClient) { }  

  getData(endpoint: string): Observable<any> { 
    return this.http.get<any>(`${this.API_URL}${endpoint}`).pipe(res => res);  
  }
}