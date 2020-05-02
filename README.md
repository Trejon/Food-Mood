# README
## Food-Mood
A React restaurant and recipe search application using fetch requests to access a Rails API backend. Uses Redux to keep central storage for the majority of the application. Employed Semantic UI framework for better styling. Uses bcrypt for a basic login, using session cookies and the redux store to track logged in status. Only intended for local development environment.

## Installation
 Uses an SQL database

```bash
  cd food-mood
  cd food-mood-backend
  bundle install
  rails db:migrate
  rails db:seed [optional]
  rails s
```
Then cd back to root (food-mood) and cd into food-mood-frontend. Run npm install to get node packages and then npm start to start application.

## Usage
If the database was seeded you can login to the seed user by using the info found in the seed file. This will display seeded lists and meals for the created user. Upon visiting the first page enable your location to use Google Maps restaurant locater feature(works on Chrome, Safari blocks the html5 geolocation functionality). If database wasn't seeded, you can create a new user by using the signup link. Once a list is created a user can search for restaurants nearby or recipes to add them as a meal. 

## Contributing
Pull requests are welcome, for changes please open an issue first.

## License
 [MIT](https://choosealicense.com/licenses/mit/)
