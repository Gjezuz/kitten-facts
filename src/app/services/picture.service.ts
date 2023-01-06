import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, firstValueFrom, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PictureService {

  constructor(private http: HttpClient) { }

  getRandomCatImageUrl() {
    // First, get the ID of a random cat
    return this.http.get('https://cataas.com/cat', { params: { json: 'true' } }).toPromise().then(response => {
      const catId = response['_id'];
      // Then, use the ID to get the URL of the cat's image
      return this.http.get(`https://cataas.com/cat/${catId}`).toPromise().then(response => {
        return response['url'];
      });
    });
  }

}
