<h1 align="center">Outdoorsy Client</h1>

## Project Concept
The assignment is to create a simple search by keyword client, consuming Outdoorsy REST API.

## Features

* #### Debounce hook - for reduced client and server load. 

* #### Load More button - utilising the limit and offset server options for increased overall performance.

* #### Implemented a hacky way to view listings even if you are not from USA - Even without VPN you will have the option to view the LA rentals :) 

* #### Basic Test coverage

* #### Custom scss animations and transitions

* #### Fallbacks for the images

* #### The minimum amount of input validations - to not search by empty space (or couple of them) at least :)

* #### Loading spinner

## Dependencies

* Axios - for faster implementation
* Typescript
* Jest
* Sass

## If i had the time ...

1. I would implement additional input validations 
2. Additional tests
3. Request retry mechs and better error handling on failed requests. Sometimes requests fail, leaving us with hanging app if we did not consider it. :)
4. The "try from LA location solution" will be displayed depending on the user location. If outside of USA - use it only then. Currently it is used in all cases. Do i have to mention the approach refactoring? More intelligent proxy have to be implemented - the IP that I found from the internet method is a temporary solution. And on the first button click - if no results are loaded - the button should be disabled. Currently you can't really understand if the first click worked or not - if you don't get results.
5. There are no search params displaying in the URL of the page. I cannot send a link with rentals to a friend. And we expect people to rent them :)
6. I would cleanup that useFetchRentals hook and make it more readable.
7. There is always something to improve.

## How to run the project locally

1. `npm i` or `npm install` if you are not lazy like me.

2. `npm start` - to start the app on localhost:3000

3. `npm test` to run the tests