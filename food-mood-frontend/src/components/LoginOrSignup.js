import React from 'react';
import Login from './user/Login';
import SignUp from './user/SignUp';
import Logout from './user/Logout';
import { connect } from 'react-redux'; 
import { render } from 'react-dom';
import { Link } from 'react-router-dom'
import MyLists from './lists/MyLists';

class Home extends React.Component{

  render() {
      return(
        <div>
          {!this.props.currentUser ?
          <h1>Welcome, please <Link to="/login">Log In</Link> into your account or <Link to="/signup">Sign Up</Link></h1> : <MyLists /> }
        </div>
      )
  }
} 

const mapStateToProps = ({ currentUser }) => {
  return {
    currentUser
  }
}

export default connect(mapStateToProps)(Home);