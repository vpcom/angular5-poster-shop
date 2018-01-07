import { Component, OnInit, Input } from '@angular/core';
import { Store } from "@ngrx/store";
import { Observable } from "rxjs/Observable";
import { Subscription } from 'rxjs/Subscription';

import { PosterType } from '../shared/poster.type';
import { ADD } from './../store/cart.reducer';
import { environment } from '../../environments/environment';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  posterObservable$: Observable<PosterType[]>;
  posters: PosterType[];

  test: PosterType;

  @Input() poster: PosterType = null;

  baseUrl: string = environment.production ?
      environment.baseHref + '/assets/img/' : '../../assets/img/';

  constructor(private store: Store<any>) {
    this.posterObservable$ = this.store.select<any>('poster')
  }

  ngOnInit() { }

  // TODO  ellipsis directive
  shortenText(text:string) {
    return text.substring(0, 100);
  }

  take() {
    this.store.dispatch({
      type: 'ADD',
      payload: this.poster
    });
  }
}
