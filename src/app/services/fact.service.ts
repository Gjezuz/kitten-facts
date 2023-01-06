import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FactService {

  constructor(private http: HttpClient) { }

  getRandomCatFact() {
    return this.http.get('https://meowfacts.herokuapp.com/').toPromise().then(response => {
      return response['data'][0];
    });
  }

}

