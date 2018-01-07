import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { DataService } from '../shared/data.service';
import { PosterType } from '../shared/poster.type';

import { environment } from '../../environments/environment';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  id: string;
  private sub: any;

  baseUrl: string = environment.production ?
      environment.baseHref + '/assets/img/' : '../../assets/img/';

  constructor(
    private route: ActivatedRoute, 
    private dataService: DataService
  ) { }

  observableItem: Observable<PosterType>;

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = params["id"];
    });
    this.observableItem = this.dataService.getItem(+this.id);

  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}