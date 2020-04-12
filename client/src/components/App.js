import React from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import RestaurantList from './restaurants/RestaurantList';
import RestaurantCreate from './restaurants/RestaurantCreate';
import RestaurantEdit from './restaurants/RestaurantEdit';
import RestaurantDelete from './restaurants/RestaurantDelete';
import RestaurantShow from './restaurants/RestaurantShow';

class App extends React.Component {
  render() {
    return(
      <BrowserRouter>
        <div>
          <Switch>
            <Route path="/" exact component={RestaurantList} />
            <Route path="/restaurants/new" exact component={RestaurantCreate} />
            <Route path="/restaurants/edit/:id" exact component={RestaurantEdit} />
            <Route path="/restaurants/delete/:id" exact component={RestaurantDelete} />
            <Route path="/restaurants/:id" exact component={RestaurantShow} />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
