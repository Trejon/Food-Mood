import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import RestaurantList from './restaurants/RestaurantList';
import RestaurantCreate from './restaurants/RestaurantCreate';
import RestaurantEdit from './restaurants/RestaurantEdit';
import RestaurantDelete from './restaurants/RestaurantDelete';
import RestaurantShow from './restaurants/RestaurantShow';
import Header from './Header';
import AuthForm from './user/AuthForm';

class App extends React.Component {
  render() {
    return(
      <BrowserRouter>
        <div>
          <Header />
          <Switch>
            <Route path="/" exact component={RestaurantList} />
            <Route path="/restaurants/new" exact component={RestaurantCreate} />
            <Route path="/restaurants/edit/:id" exact component={RestaurantEdit} />
            <Route path="/restaurants/delete/:id" exact component={RestaurantDelete} />
            <Route path="/restaurants/:id" exact component={RestaurantShow} />
          </Switch>
          <AuthForm />
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
