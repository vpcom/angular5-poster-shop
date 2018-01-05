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
});
