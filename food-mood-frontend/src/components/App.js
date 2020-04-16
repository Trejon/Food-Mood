import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import ListList from './lists/ListList';
import ListCreate from './lists/ListCreate';
import ListEdit from './lists/ListEdit';
import ListDelete from './lists/ListDelete';
import ListShow from './lists/ListShow';
import FetchRestaurants from './restaurants/FetchRestaurants';
import Header from './Header';
import Home from './Home';
import history from '../history';
import { connect } from 'react-redux'; 
import { getCurrentUser } from '../actions/currentUser';



class App extends React.Component {

  constructor() {
    super(); 
    this.state = {
      loggedInStatus: 'NOT_LOGGED_IN', 
      user: {}, 
      errorMessage: ''
    }
  }

  handleLogin = (data) => {
    this.setState({
      loggedInStatus: "LOGGED_IN", 
      user: data.user
    })

  };

  handleLogout = () => {
    this.setState({
      loggedInStatus: "NOT_LOGGED_IN", 
      user: {}
    })
  };

  componentDidMount() {
    this.props.getCurrentUser()
  }

  render() {
    return(
      <Router history={history}>
        <div>
          <Header />
          <Switch>
            <Route path="/" exact component={ListList} />
            <Route path="/list/new" exact component={ListCreate} />
            <Route path="/list/edit/:id" exact component={ListEdit} />
            <Route path="/list/delete/:id" exact component={ListDelete} />
            <Route path="/list/:id" exact component={ListShow} />
            <Route path="/restaurants" exact component={FetchRestaurants} />
          </Switch>
          <div>
            <Home 
              loggedInStatus={this.state.loggedInStatus} 
              handleLogout={this.handleLogout} 
              handleLogin={this.handleLogin} 
            />
          </div> 
        </div>
      </Router>
    )
  }
}

export default connect(null, { getCurrentUser })(App);
