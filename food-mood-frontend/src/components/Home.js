import React from 'react';
import Login from './user/Login';
import SignUp from './user/SignUp';
import Logout from './user/Logout';
import { connect } from 'react-redux'; 
import { render } from 'react-dom';

class Home extends React.Component{
  handleSuccessfulAuth = (data) => {
    this.props.handleLogin(data)
  }

  // handleLogoutClick = () => {


  // }


  render() {
      return(
        !this.props.currentUser ? 
        <div>
          <h1>Sign In!</h1>
            <Login handleSuccessfulAuth={this.handleSuccessfulAuth} />
          <h1>Sign Up!</h1>
            <SignUp handleSuccessfulAuth={this.handleSuccessfulAuth} />
        </div> : <Logout />
      )
  }
    


} 

const mapStateToProps = ({ currentUser }) => {
  return {
    currentUser
  }
}

export default connect(mapStateToProps)(Home);