import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import {Store} from "@ngrx/store";
import { Observable } from "rxjs/Observable";
import { Subscription } from 'rxjs/Subscription';

import { PosterType } from '../shared/poster.type';
import { ADD } from './../store/cart';
import { environment } from '../../environments/environment';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit, OnDestroy {

  posterObservable$: Observable<PosterType[]>;
  private tagStateSubscription: Subscription;
  posters: PosterType[];
  done = false;

  test: PosterType;

  @Input() poster: PosterType = null;

  baseUrl: string = environment.production ?
      environment.baseHref + '/assets/img/' : '../../assets/img/';

  constructor(private store: Store<any>) {
    this.posterObservable$ = this.store.select<any>('poster')
  }

  ngOnInit() {
    this.tagStateSubscription = this.posterObservable$.subscribe((state) => {
      this.posters = state;
    });
  }

  // TODO  ellipsis directive
  shortenText(text:string) {
    return text.substring(0, 100);
  }

  buy() {
    this.store.dispatch({
      type: 'ADD',
      payload: this.poster
    });
  }

  ngOnDestroy() {
    this.tagStateSubscription.unsubscribe();
  }
}
