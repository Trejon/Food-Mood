import React from 'react';
import { Link } from 'react-router-dom'; 
import { connect } from 'react-redux'
import Login from './user/Login';
import Logout from './user/Logout';

const Header = ({ currentUser }) => {
  if (!currentUser) {
    return <Login />
  } else {
    
  return(
    <div className="ui secondary pointing menu"> 
      <Link to="/" className="item">
        Home
      </Link>
      <Link to="/lists" className="item">
        Lists
      </Link>
      <div className="">
       <strong>Welcome, {currentUser.currentUser.name}</strong> 
      </div>
      <div className="right menu">
        <Logout />
      </div>
    </div>
  )
  }
}

const mapStateToProps = state => {
  return {
    currentUser: state.currentUser
  }
}

export default connect(mapStateToProps)(Header);