import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FactService {
  constructor(private httpClient: HttpClient) {}

  getRandomFact(): Observable<Fact> {
    return this.httpClient.get<Fact>('https://meowfacts.herokuapp.com');
  }

}

export interface Fact {
  data: string[];
}


