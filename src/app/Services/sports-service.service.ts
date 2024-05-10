import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SportsService {

  constructor(private httpClient:HttpClient) { }
  GetSportsData():Observable<any>{

      //The api gets news about sports
    return this.httpClient.get('https://newsapi.org/v2/top-headlines?country=us&category=sports&apiKey=8b806c4f23dc41d395b21ba25331735e')
  }
}
