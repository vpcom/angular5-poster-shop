# Angular 5 poster shop

**!!! Project in progress !!!**

## In short

A web application selling posters.

A small-sized Angular 5 project designed with Material Design components, internal state logic centralized with a redux type of architecture triggering front end updates when the data fetching via Observables is done.

**Demo: [http://vincentperrin.com/poster-shop/angular/](http://vincentperrin.com/poster-shop/angular/)**

## In longer

A list of card presents the posters to buy. We can select them, see the details and select them. The left panel displays the selection and proposes to buy. A form takes data and the validation saves in the browser local storage to establish logs.

The form fields can be checked, and unit and end to end tests ensure the stability of the application.

The design is also responsive with the CSS3 flexbox system and the flex-layout library.

## Installation

This project was generated with [Angular CLI](https://github.com/angular/angular-cli). Run `npm install -g angular-cli` to install it if necessary.

Run `npm install` for setting up the project.

## Running the project

    ng serve

And navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Running tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io), or 'ng test -sm=false' (-sm = --sourcemaps) for some debuging.

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).


## Building for deployment

    ng build --prod --base-href /poster-shop/angular/

## Project published by

*[vincentperrin.com](https://vincentperrin.com) - [contact](contact@vincentperrin.com)*
