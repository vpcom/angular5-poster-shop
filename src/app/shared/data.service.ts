import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { PosterType } from '../shared/poster.type';


@Injectable()
export class DataService {
  private dataUrl: string = '../../assets/data/space_invaders.json'; // {{ baseHref }}

  constructor(private http: Http) { }

  getData(): Observable<PosterType[]> {
    console.log("getdata");
    return this.http.get(this.dataUrl)
        .map(res => {
          console.log(res.json().data);
            return <PosterType[]>res.json().data || {}; 
        })
        .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
