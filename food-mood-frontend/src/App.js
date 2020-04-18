import React from 'react';
import { Router, Route, Switch, Link } from 'react-router-dom';
import ListList from './components/lists/ListList';
import ListCreate from './components/lists/ListCreate';
import ListEdit from './components/lists/ListEdit';
import ListDelete from './components/lists/ListDelete';
import ListShow from './components/lists/ListShow';
import FetchRestaurants from './components/restaurants/FetchRestaurants';
import Header from './components/Header';
import Login from './components/user/Login';
import Signup from './components/user/SignUp';
import Logout from './components/user/Logout';
import MyLists from './components/MyLists';
import LoginOrSignup from './components/LoginOrSignup';
import history from './history';
import { connect } from 'react-redux'; 
import { getCurrentUser } from './actions/currentUser';
import MainContainer from './components/MainContainer';



class App extends React.Component {
  constructor() {
    super(); 
    this.state = {
      loggedInStatus: 'NOT_LOGGED_IN', 
      user: {}, 
      errorMessage: ''
    }
  }

  // handleLogin = (data) => {
  //   this.setState({
  //     loggedInStatus: "LOGGED_IN", 
  //     user: data.user
  //   })
  // };

  // handleLogout = () => {
  //   this.setState({
  //     loggedInStatus: "NOT_LOGGED_IN", 
  //     user: {}
  //   })
  // };

  componentDidMount() {
    this.props.getCurrentUser()
  }

  render() {
    const { loggedIn } = this.props
    return(
      <Router history={history}>
        <div>
          {loggedIn ? <Header location={this.props.location} /> : null}
          <MainContainer />
          <Switch>
            {/* <Route path="/" exact component={Home} />
            <Route path="/list/lists" exact component={ListList} />
            <Route path="/list/new" exact component={ListCreate} />
            <Route path="/list/edit/:id" exact component={ListEdit} />
            <Route path="/list/delete/:id" exact component={ListDelete} />
            <Route path="/list/:id" exact component={ListShow} />
            <Route path="/restaurants" exact component={FetchRestaurants} /> */}
            <Route path="/" exact component={LoginOrSignup} />
            <Route path="/login" exact component={Login} />
            <Route path="/signup" exact component={Signup} /> 
            <Route path="/lists" exact component={MyLists} />
            <Route path="/lists/new" exact component={ListCreate} />
          </Switch>
          <div>
          </div> 
        </div>
      </Router>
    )
  }
}

const mapStateToProps = state => {
  return {
    loggedIn: !!state.currentUser
  }
}

export default connect(mapStateToProps, { getCurrentUser })(App);
