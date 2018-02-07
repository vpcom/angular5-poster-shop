import {browser, element, by, By, $, $$, ExpectedConditions} from 'protractor';
import { AppPage } from './app.po';
import * as GLOBALS from '../globals';

const APP_TITLE: string = GLOBALS.APP_TITLE;

describe('angular5-poster-shop App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display the application title', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual(APP_TITLE);
  });


  it('should click on the first take button', () => {
    var elementToBePresent = element.all(by.css('.take-button')).first();
    elementToBePresent.click().then(function() {
      var elementToBePresent = element.all(by.css('.my-card')).first();

      expect(elementToBePresent.isPresent());
    }); 
  });


  it('should click to buy the cart', () => {
    var elementToBePresent = element(by.id('buy-button'));
    elementToBePresent.click().then(function() {
      var elementToBePresent = element(by.id('buy-form'));

      expect(elementToBePresent.isPresent());
    }); 
  });


});
