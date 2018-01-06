import { Component, OnInit, Input } from '@angular/core';

import { PosterType } from '../shared/poster.type';

import { environment } from '../../environments/environment';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() poster: PosterType = null;

  baseUrl: string = environment.production ?
      environment.baseHref + '/assets/img/' : '../../assets/img/';

  constructor() { }

  ngOnInit() {
  }

  // TODO: ellipsis directive could be nice
  shortenText(text:string) {
    return text.substring(0, 100);
  }
}
