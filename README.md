# Angular 5 poster shop

**!!! Project in progress !!!**

## TL;DR

A simple web application (for buying posters) aiming at being a good use case of Angular and other librairies.

A small-sized Angular 5 project designed with Material Design components, forms with a redux architecture and observable services.

**Demo: [http://vincentperrin.com/poster-shop/angular/](http://vincentperrin.com/poster-shop/angular/)**

## A full test scenarion and technical features

- A list of card presents the posters to buy.

- We can select them directly, or see the details before selecting them.

- The right panel displays the cart content and proposes to buy.

- A form takes the user information (not required) and the validation saves in the browser local storage to populate the content of a logs page where the user is redirected after buying.

The form fields are validated (but are not required).

Unit and end to end tests ensure the stability of the application.

The design is responsive with flex-layout and CSS3 flexbox.

## Installation

This project was generated with [Angular CLI](https://github.com/angular/angular-cli). Run `npm install -g angular-cli` to install it if necessary.

Run `npm install` for setting up the project.

## Running the project

    ng serve

Run this command and navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Running tests

    `ng test`
    
Run this command to execute the unit tests via [Karma](https://karma-runner.github.io), or 'ng test -sm=false' (-sm = --sourcemaps) for some debuging.

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).


## Building the project for deployment

    ng build --prod

or

    ng build --prod --base-href /poster-shop/angular/

are for building the application for publication in a specific website folder.
