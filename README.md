# Angular 5 poster shop

**In progress**

## Objective

This is a small-sized project aiming at experiencing the combination of basic components and technics with Angular 5.

### Demo

http://vincentperrin.com/poster-shop/angular/

## Project description

### General description

The application loads a list of item which is displayed on the main page.

Clicking on an element provides more details on a specific page.

It is possible to add an item to the shopping cart.

The shopping cart should appear on the right panel that opens when an item is added and it should be possible to close it, a notification should be visible on top. On mobile, the shopping cart opens only when the user clicks on the notification.

At the top of the shopping cart, a button gives access to the registration form that simulates the buying. Some validated information must be provided to proceed and a confirmation notification appears temporarily.

The footer is fixed at the bottom and provides a link to access a page with the list of all purchases with all the related data.

The data is stored in a JSON file and the puchases is stored in the local storage of the browser.

Unit and end to end tests ensure the stability of the application.

### Technical description

The application data is provided by RxJS Observables from a local JSON file and the data is stored in the local storage.

The data is displayed thanks to Material Design and Flex-layout. The later is also used for the responsiveness and managing the shopping cart panel.

A Router module provides the navigation to different pages.

A RsJS store keeps the state, the shopping cart data and the purchasing data during the session.

The purchase form contains fields validated depending on their type and with reusable directives to ensure the email is valid and other fields contains only letters or digits.

The unit testing ensures the individual components are loaded and that the form fields work and that the list of purchases is displayed.

The end to end testing goes through the minimal complete scenario to garanty the overall application works as expected. Testing the toggling of the shopping cart panel and its behavior on a mobile device is also asserted.

## Technical matters

### Installation

This project was generated with [Angular CLI](https://github.com/angular/angular-cli). Run `npm install -g angular-cli` to install it if necessary.

Run `npm install` for setting up the project.

### Running the project

    ng serve

And navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Running tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

Note: 'ng test -sm=false' (-sm = --sourcemaps) to see the real bug when it breaks too much.

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).


### Building

    ng build --prod --base-href /poster-shop/angular/

## Author

*[vincentperrin.com](https://vincentperrin.com)*
