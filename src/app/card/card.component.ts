import { Component, OnInit, Input } from '@angular/core';

import { PosterType } from '../shared/poster.type';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() poster: PosterType = null;

  constructor() { }

  ngOnInit() {
  }

  // TODO: ellipsis directive could be nice
  shortenText(text:string) {
    return text.substring(0, 200);
  }
}
