import { Component, OnInit } from '@angular/core';
import { Store } from "@ngrx/store";
import { Observable } from "rxjs/Observable";

import { PosterType } from '../shared/model/poster.type';
import { environment } from '../../environments/environment';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  posterList$: Observable<PosterType[]>;
  baseUrl: string = environment.production ?
      environment.baseHref + '/assets/img/' : '../../assets/img/';

  constructor(private store: Store<any>) {
    this.posterList$ = this.store.select('cartContent');
  }

  ngOnInit() { }
}
