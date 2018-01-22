import { Component, OnInit } from '@angular/core';
import { Store } from "@ngrx/store";
import { Observable } from "rxjs/Observable";

// import { FormControl } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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

  client : {};
  
  buyForm: FormGroup;

  constructor(private store: Store<any>, private formBuilder: FormBuilder) {
    this.posterList$ = this.store.select('cartContent');
  }

  ngOnInit() {

    // TODO temp...
    // default values
    this.client = {
      firstName: '',
      lastName: '',
      newsLetter: false,
      advertising: false,
      comment: ''
    };


    this.createForm();

  }

  createForm() {
    this.buyForm = this.formBuilder.group({
      'advertising': [{value: this.client['advertising'], disabled: false}],
      'firstName': [this.client['firstName'], [
        Validators.required,
        Validators.minLength(2)
      ]],
      'lastName': [this.client['lastName'], [
        Validators.required,
        Validators.minLength(2)
      ]],
      'newsLetter': this.client['newsLetter']? '1' : '2',
      'comment': this.client['comment'],
    });
  }

  onSubmit() {
    let stringToStore = '';

    // translating radio button values
    this.buyForm.value.newsLetter =
        this.buyForm.value.newsLetter === '1' ? true : false;

    // the object must be stored as a string
    stringToStore = JSON.stringify(this.buyForm.value);

    // // storage
    // localStorage.setItem(this.storageId, stringToStore);

    // // debug confirmation
    // console.log(localStorage[this.storageId]);
  }

}
