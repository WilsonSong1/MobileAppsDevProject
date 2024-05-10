import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  apiKey = '8b806c4f23dc41d395b21ba25331735e';
  apiUrl = 'https://newsapi.org/v2/top-headlines';

  constructor(private http: HttpClient) { }

  //The api gets the top hedlines news
  getTopHeadlines(): Observable<any> {
    return this.http.get(`${this.apiUrl}?country=us&apiKey=${this.apiKey}`);
  }

}