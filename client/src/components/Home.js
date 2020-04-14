import React from 'react';
import SignIn from './user/SignIn';
import SignUp from './user/SignUp';
import { render } from 'react-dom';

class Home extends React.Component{
  handleSuccessfulAuth = (data) => {
    this.props.handleLogin(data)
  }

  // handleLogoutClick = () => {


  // }


  render() {
    if (this.props.loggedInStatus === "NOT_LOGGED_IN"){
      return(
        <div>
          <h1>Sign In!</h1>
            <SignIn handleSuccessfulAuth={this.handleSuccessfulAuth} />
          <h1>Sign Up!</h1>
            <SignUp handleSuccessfulAuth={this.handleSuccessfulAuth} />
        </div>
      )
    } else {
      return(
        <div> 
          <h1>Hello</h1>
        </div>
      )
    }
  }
} 

export default Home;