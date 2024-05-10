import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScienceService {

  constructor(private httpClient:HttpClient) { }

  //The api gets news about science
  GetScienceData():Observable<any>{
    return this.httpClient.get('https://newsapi.org/v2/top-headlines?country=us&category=science&apiKey=8b806c4f23dc41d395b21ba25331735e');
  }
}
