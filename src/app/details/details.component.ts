import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Store } from "@ngrx/store";

import { DataService } from '../shared/services/data.service';
import { PosterType } from '../shared/model/poster.type';

import { environment } from '../../environments/environment';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  id: string;
  private sub: any;
  observableItem: Observable<PosterType>;
  item: PosterType;

  baseUrl: string = environment.production ?
      environment.baseHref + '/assets/img/' : '../../assets/img/';

  constructor(
    private route: ActivatedRoute, 
    private dataService: DataService,
    private store: Store<any>
  ) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = params["id"];
    });
    this.observableItem = this.dataService.getItem(+this.id);
  }

  take() {
    this.observableItem.subscribe(item => {
      this.item = item;
      this.store.dispatch({
        type: 'ADD',
        payload: this.item
      });
    });
  }
  
  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}