import { Component, OnInit, Input } from '@angular/core';

import { environment } from '../../environments/environment';
import * as GLOBALS from '../../../globals';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  TITLE: string = GLOBALS.APP_TITLE;

  baseHref: string = environment.baseHref;

  constructor() { }

  ngOnInit() {
  }
}
