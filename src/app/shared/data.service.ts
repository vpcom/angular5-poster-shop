import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { PosterType } from '../shared/poster.type';

import { environment } from '../../environments/environment';

@Injectable()
export class DataService {

  dataUrl: string = environment.baseHref + '/assets/data/space_invaders.json';

  constructor(private http: Http) { }

  getData(): Observable<PosterType[]> {
    return this.http.get(this.dataUrl)
        .map(res => {
            return <PosterType[]>res.json().data || {}; 
        })
        .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}