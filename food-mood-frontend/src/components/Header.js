import React from 'react';
import { Link } from 'react-router-dom'; 
import { connect } from 'react-redux'
import Login from './user/Login';
import Logout from './user/Logout';

const Header = ({ currentUser }) => {
  return (
    <div className="ui pointer menu">
      { currentUser ? <strong>Welcome, {currentUser.currentUser.data.attributes.name}</strong> : ""}
      <button className="positive ui button"> Log In </button>
      OR
      <button className="positive ui button"> Sign Up </button>
      {/* { currentUser ? <Logout/> : <Login/> } */}
      { currentUser ? <Logout /> : null}
    </div>
  )
}

const mapStateToProps = state => {
  return {
    currentUser: state.currentUser
  }
}

export default connect(mapStateToProps)(Header);