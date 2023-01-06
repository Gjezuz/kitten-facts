import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, firstValueFrom, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PictureService {

  constructor(private httpClient: HttpClient) {}

  getPictureUrl(id: string): string {
    return 'https://cataas.com/cat/' + id;
  }

  getRandomCat(): Observable<Cat> {
    const params = new HttpParams().set('json', 'true');
    return this.httpClient.get<Cat>('https://cataas.com/cat', { params });
  }


}

export interface Cat {
  tags: string[];
  createdAt: string;
  updatedAt: string;
  validated: boolean;
  owner: string;
  file: string;
  mimetype: string;
  size: number;
  _id: string;
  url: string;
}
