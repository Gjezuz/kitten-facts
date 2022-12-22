import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FactService {

  private url = 'https://meowfacts.herokuapp.com/';

  constructor(
    private httpClient: HttpClient,
  ) { }

  getRandomFact(): Observable<string> {
    return this.httpClient.get<Fact>(this.url).pipe(map((fact: Fact) => fact.data[0]));
  }
}

interface Fact {
  data: string[];
}
