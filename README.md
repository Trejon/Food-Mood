# README
## Food-Mood
A React restaurant and recipe finder application using javascript to access a Rails API backend. Uses bcrypt for a basic login, using session cookies and the redux store to track logged in status. Only intended for local development environment.

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
Then cd back to root of food-mood and cd into food-mood-frontend. Run npm install to get packages and then npm start to start application.

## Usage
If the database was seeded you can login to the seed user by using the info found in the seed file. This will display seeded lists and meals for the created user. Otherwise you can create a new user by using the signup link.

## Contributing
Pull requests are welcome, for changes please open an issue first.

## License
 [MIT](https://choosealicense.com/licenses/mit/)
