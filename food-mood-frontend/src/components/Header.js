import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Logout from './user/Logout';
import '../App.css';

const Header = ({ currentUser, loggedIn }) => {
  if (currentUser) {
    return (
      <div className="ui teal six item menu">
        <div className="header item navitem">
          <NavLink
            style={{
              color: 'rgb(250, 239, 135, 0.967)',
              fontSize: '40px',
              borderStyle: 'double',
            }}
            exact
            to=""
          >
            FoodMood
          </NavLink>
        </div>

        <div className="header item navitem">
          <NavLink exact activeClassName="active" to="/lists">
            <h4>Lists</h4>
          </NavLink>
        </div>

        <div className="header item navitem">
          <NavLink exact activeClassName="active" to="/lists/new">
            <h4>Create List</h4>
          </NavLink>
        </div>

        <div className="header item navitem">
          <NavLink exact activeClassName="active" to="/restaurants">
            <h4>Search Restaurants</h4>
          </NavLink>
        </div>

        <div className="header item navitem">
          <NavLink exact activeClassName="active" to="/recipes">
            <h4>Search Recipes</h4>
          </NavLink>
        </div>

        <div className="right menu">
          {loggedIn ? (
            <>
              <div className="ui item logout">
                <Logout />
              </div>
            </>
          ) : null}
        </div>
      </div>
    );
  } else {
    return (
      <div className="ui teal one item menu">
        <div className="header item navitem">
          <h1 className="HomeHeader">
            <img
              className="leadingHomeIcons"
              src="https://img.icons8.com/plasticine/100/000000/cookie.png"
            />
            <img
              className="leadingHomeIcons"
              src="https://img.icons8.com/plasticine/100/000000/kawaii-taco.png"
            />
            Welcome to FoodMood
            <img src="https://img.icons8.com/plasticine/100/000000/kawaii-pizza.png" />
            <img src="https://img.icons8.com/plasticine/100/000000/sushi.png" />
          </h1>
        </div>

        <div className="right menu">
          <strong className="logo">FoodMood</strong>
        </div>

        <div className="right menu">
          {loggedIn ? (
            <>
              <div className="ui item logout">
                <Logout />
              </div>
            </>
          ) : null}
        </div>
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser,
    loggedIn: !!state.currentUser,
  };
};

export default connect(mapStateToProps)(Header);
