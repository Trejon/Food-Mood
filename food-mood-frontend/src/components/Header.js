import React from 'react';
import { Link, NavLink, Switch } from 'react-router-dom'; 
import { connect } from 'react-redux'
import Login from './user/Login';
import Logout from './user/Logout';
import SignUp from './user/SignUp';
import MyLists from './lists/MyLists';


const Header = ({ currentUser, loggedIn }) => {
  return(
    <div className="ui teal seven item inverted menu">
      <div className="header item">
        <NavLink exact activeClassName="active" to="/lists"><h4>Lists</h4></NavLink>
      </div>
        
      <div className="header item">
        <NavLink exact activeClassName="active" to="/lists/new"><h4>Create List</h4></NavLink>
      </div>

      <div className="header item">
        <NavLink exact activeClassName="active" to="/restaurants"><h4>Browse Restaurants</h4></NavLink>
      </div>

      <div className="header item">
        <NavLink exact activeClassName="active" to="/restaurants"><h4>Browse Recipes</h4></NavLink>
      </div>
        
        <div className="right menu">
          {loggedIn ? <><p className="item">Currently logged in as {currentUser.currentUser.data.attributes.name}</p> <div className="item"><Logout/></div></> : null}
        </div>
      
    </div>
  )
}

const mapStateToProps = state => {
  return {
    currentUser: state.currentUser, 
    loggedIn: !!state.currentUser
  }
}

export default connect(mapStateToProps)(Header);















// return (
//   <div className="ui pointer menu">
//     { currentUser ? <strong>Welcome, {currentUser.currentUser.data.attributes.name}</strong> : ""}
//     {/* { currentUser ? <Logout/> : <Login/> } */}
//     { currentUser ? <Logout /> : 
//       <div>
//         <h1><Link to='/login'>Login</Link> or <Link to='/signup'>Signup</Link></h1>
//       </div>
//     }
//   </div>
// )