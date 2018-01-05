import { Component, OnInit, Input } from '@angular/core';

import { environment } from '../../environments/environment';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() title: string = null;

  baseHref: string = '';

  constructor() { }

  ngOnInit() {
    this.baseHref = environment.baseHref;
  }
}
