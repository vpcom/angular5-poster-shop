import { Component, OnInit } from '@angular/core';
import { Store } from "@ngrx/store";
import { Observable } from "rxjs/Observable";

import { PosterType } from '../shared/poster.type';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.scss']
})
export class BuyComponent implements OnInit {

  posterList$: Observable<PosterType[]>;
  baseUrl: string = environment.production ?
      environment.baseHref + '/assets/img/' : '../../assets/img/';

  constructor(private store: Store<any>) {
    this.posterList$ = this.store.select('cartContent');
  }

  ngOnInit() {
  }

}
