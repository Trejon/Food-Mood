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
          <h1>Please sign in above!</h1>
          <h1>Sign Up!</h1>
            <SignUp handleSuccessfulAuth={this.handleSuccessfulAuth} />
        </div> : null
      )
  }
    


} 

const mapStateToProps = ({ currentUser }) => {
  return {
    currentUser
  }
}

export default connect(mapStateToProps)(Home);