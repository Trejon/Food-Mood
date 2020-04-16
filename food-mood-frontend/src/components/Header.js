import React from 'react';
import { Link } from 'react-router-dom'; 
import SignIn from './user/Login';

const Header = () => {
  return(
    <div className="ui secondary pointing menu"> 
      <Link to="/" className="item">
        Home
      </Link>
      <Link to="/lists" className="item">
        Lists
      </Link>
      <div className="right menu">
        <button className="ui button primary">Sign in</button>
      </div>
    </div>
  )
}

export default Header;