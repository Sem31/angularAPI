import { Injectable } from '@angular/core';
import { HERO } from './data'
import { Hero } from './hero';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable,throwError, BehaviorSubject } from 'rxjs'; 

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  hero : Hero[];

  constructor(private http:HttpClient) {
    this.hero = HERO;
   }

  getHeroes() : Hero[] {
    return this.hero;
  }

  getresult(): Observable<any>{
    return this.http.get("http://192.168.0.148:8080/getresult").pipe(
      tap(a =>{
        console.log("data fetched");
      })
    )
  }
}
