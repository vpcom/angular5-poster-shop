import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { trigger, state, animate, transition, style } from '@angular/animations';

import { DataService } from '../shared/data.service';
import { PosterType } from '../shared/poster.type';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  observableData: Observable<PosterType[]>;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.observableData = this.dataService.getData();
  }
}
