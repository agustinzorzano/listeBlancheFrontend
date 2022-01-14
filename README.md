# ListeBlancheFrontend

Project that consists in the development of an anti-spam application which is divided in
three parts:

* [Frontend](https://github.com/agustinzorzano/listeBlancheFrontend)
* [API](https://github.com/agustinzorzano/whitelistRest)
* [Backend scripts](https://github.com/agustinzorzano/liste_blanche_backend) 

In this repository we have defined the frontend interface using Angular. 
This website will be used by the user to register his mailbox and 
manage the different options such as:  

* See the mails in quarantine and manage them
* Manage the whitelist and blacklist
* See a history of the different actions that have been made 

The project was developed during an academic exchange in France in the University "IMT Atlantique"
and it was used as a final academic work in the University "Universidad de Buenos Aires".

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.2.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.


## Running with Docker

Build the container:

`sudo docker build -t project_frontend .`

Run the container

`sudo docker run -it --init --env PORT=5000 -p 4200:5000 project_frontend`
