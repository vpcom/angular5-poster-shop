import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { PosterType } from '../model/poster.type';

import { environment } from '../../../environments/environment';

@Injectable()
export class DataService {

  dataUrl: string = environment.baseHref + '/assets/data/space_invaders.json';
  cachedData: PosterType[] = null;

  constructor(private http: Http) { }

  getData(): Observable<PosterType[]> {
    if (this.cachedData === null) {
      return this.http.get(this.dataUrl)
        .map(res => {
          this.cachedData = res.json().data;
          // console.log(this.cachedData);
          return <PosterType[]>res.json().data || {}; 
        })
        .catch(this.handleError);
    } else {
      return Observable.of(this.cachedData);
    }
  }

  getItem(id: number): Observable<PosterType> {
    let foundItem: PosterType = null;

    if (this.cachedData === null) {
      return this.getData().map((data: PosterType[]) => data.find(item => item.id === id));
    } else {
      this.cachedData.forEach(item => {
        if (item.id === id) {
          foundItem = item;
        }
      });
      return Observable.of(foundItem);
    }
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
