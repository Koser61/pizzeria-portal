# pizzeria-portal

This project is a *frontend react implementation of **pizzeria restaurant web app***.  
It uses [_project-pizzeria_](https://github.com/Koser61/project-pizzeria.git) client page and **json-server** API to communicate between websites.
  

It was made as final project after the end of Kodilla's frontend bootcamp.
  

### Live demo:

- [_Client website_](https://tranquil-refuge-29819.herokuapp.com/)
- [_Restaurant app_](https://tranquil-refuge-29819.herokuapp.com/panel/)

>*If page is loading - please wait, server is waking up (free Heroku hosting).*
  

## Table of Contents

* [Technologies Used](#technologies-used)
* [Features](#features)
* [Setup](#setup)
* [Local environment](#local-environment)  
  

## Technologies Used

- HTML5
- CSS3
- JavaScript *(ES6+)*
- React
- React Router
- Redux
- Redux Thunk
  

## Features

-  **Dashboard homepage**
	- Show amount of today's *orders* and *events*

-  **Ordering**
	- shows list of *tables* and active *orders* for each *table*,
	- change order status to delivered if it's *ready*
	-  **add new order** buttons for each *table*

-  **Adding order view**
	-  *product* ordering with choice of its' ingredients & amount

-  **Tables**
	- shows today's *bookings* & *events*

-  **Booking/Event view**
	- shows editable reservation parameters

-  **Kitchen**
	- shows list of local & delivery orders to realise
	- change order status to *ready*
  

## Setup

Install project dependencies using **yarn** package manager CLI command:
>  `yarn install`
  

## Local environment

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
  

### Available Scripts:

Start local server:
>  `yarn start`

Create production build:
>  `yarn build`
  

### Available URLs:

Live preview of current project *(restaurant app)*:
> [http://localhost:3000/](http://localhost:3000/)

Client website *(won't react to changes in code)*
> [http://localhost:3131/](http://localhost:3131/)