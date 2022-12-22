import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, firstValueFrom, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PictureService {

  private baseUrl = 'https://cataas.com';
  private pictureUrl = '/cat';

  constructor(
    private httpClient: HttpClient,
  ) { }

  getPictureUrl(id: string) {
    return this.baseUrl + this.pictureUrl + `/${id}`
  }

  getRandomCat(): Observable<Cat> {
    const params = new HttpParams()
      .set('json', true)
    return this.httpClient.get<Cat>(this.baseUrl + this.pictureUrl, {params});
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
