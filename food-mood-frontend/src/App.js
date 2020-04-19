import React from 'react';
import { Router, Route, Switch, Link } from 'react-router-dom';
import './App.css'
import ListCard from './components/lists/ListCard';
import FetchRestaurants from './components/restaurants/FetchRestaurants';
import FetchRecipes from './components/recipes/FetchRecipes';
import Header from './components/Header';
import Login from './components/user/Login';
import Signup from './components/user/SignUp';
import Logout from './components/user/Logout';
import MyLists from './components/lists/MyLists';
import LoginOrSignup from './components/LoginOrSignup';
import history from './history';
import { connect } from 'react-redux'; 
import { getCurrentUser, getUserCoords } from './actions/currentUser';
import MainContainer from './components/MainContainer';
import ListForm from './components/lists/ListForm';
import { setFormDataForEdit } from './actions/listForm';
import NewListFormWrapper from './components/lists/NewListFormWrapper';
import EditListFormWrapper from './components/lists/EditListFormWrapper';



class App extends React.Component {
  constructor() {
    super(); 
    this.state = {
      loggedInStatus: 'NOT_LOGGED_IN', 
      user: {}, 
      errorMessage: ''
    }
  }

  componentDidMount() {
    this.props.getCurrentUser()
    this.props.getUserCoords()
  }

  render() {
    const { loggedIn, lists, setFormDataForEdit } = this.props
    return(
      <Router history={history}>
        <div className="app">
          {loggedIn ? <Header location={this.props.location} /> : null}
          <MainContainer />
          <Switch>
            <Route path="/restaurants" exact component={FetchRestaurants} />
            <Route path="/recipes" exact component={FetchRecipes} />
            <Route path="/" exact component={LoginOrSignup} />
            <Route path="/login" exact component={Login} />
            <Route path="/signup" exact component={Signup} /> 
            <Route path="/lists" exact component={MyLists} />
            <Route path="/lists/new" exact component={NewListFormWrapper} />
            <Route path="/lists/:id" exact render={props => {
              const list = lists.find(list => list.id === props.match.params.id)
              return <ListCard list={list} />
              }
              }/>
              <Route path="/lists/:id/edit" exact render={props => {
              const list = lists.find(list => list.id === props.match.params.id)
              return <EditListFormWrapper list={list} />
              }
              }/>
              {/* <Route path="/meals/:id" exact render={props => {
              const meal = meals.find(meal => meal.id === props.match.params.id)
              return <MealCard meal={meal} />
              }
              }/> */}
          </Switch>
        </div>
      </Router>
    )
  }
}

const mapStateToProps = state => {
  return {
    loggedIn: !!state.currentUser, 
    lists: state.myLists
  }
}

export default connect(mapStateToProps, { getCurrentUser, setFormDataForEdit, getUserCoords })(App);
