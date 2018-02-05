import { Component, OnInit } from '@angular/core';
import { Store } from "@ngrx/store";
import { Observable } from "rxjs/Observable";

// import { FormControl } from '@angular/forms';
import { FormBuilder, FormGroup, Validators, FormControl, FormGroupDirective, NgForm } from '@angular/forms';

import { PosterType } from '../shared/model/poster.type';
import { environment } from '../../environments/environment';
import { ErrorStateMatcher } from '@angular/material';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    return !!(control && control.invalid && (control.dirty || control.touched));
  }
}

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
      email: '',
      newsLetter: false,
      agreement: false
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
      'email': [this.client['email'], [Validators.required, Validators.email]],
      'newsLetter': [this.client['newsLetter']],
      // [this.client['email'], [
      //   Validators.required,
      // ]],

      'agreement': this.client['agreement']? '1' : '2',
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
  
  getErrorMessage() {
    return this.client.email.hasError('required') ? 'You must enter a value' :
        this.client.email.hasError('email') ? 'Not a valid email' :
            '';
  }

  matcher = new MyErrorStateMatcher();

}