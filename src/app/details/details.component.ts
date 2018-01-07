import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from "@ngrx/store";

import { DataService } from '../shared/data.service';
import { PosterType } from '../shared/poster.type';

import { environment } from '../../environments/environment';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  posterObservable$: Observable<PosterType[]>;

  baseUrl: string = environment.production ?
      environment.baseHref + '/assets/img/' : '../../assets/img/';

  constructor(
    private dataService: DataService,
    private store: Store<any>
  ) {
    this.posterObservable$ = this.store.select<any>('poster')
  }

  ngOnInit() { }

  take() {
    this.store.dispatch({
      type: 'ADD',
      payload: this.posterObservable$
    });
  }
}