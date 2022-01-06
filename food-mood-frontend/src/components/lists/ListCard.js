import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import NewMealFormWrapper from '../meals/NewMealFormWrapper';
import EditMealFormWrapper from '../meals/EditMealFormWrapper';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { getMyMeals } from '../../actions/myMeals';
import history from '../../history';

import { Header, Icon, Image } from 'semantic-ui-react';

import './List.scss';

import './List.css';

const HeaderExampleUsersIcon = (props) => {
  console.log(props.content);
  return (
    <div>
      <Header as="h2" icon textAlign="center">
        <Icon name="users" circular />
        <Header.Content>Restaurants and Recipes on this list:</Header.Content>
      </Header>
    </div>
  );
};
class ListCard extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    const renderedMeal = this.props.location.query
      ? this.props.location.query.renderedMeal
      : null;
    const mealType = this.props.location.query
      ? this.props.location.query.mealType
      : null;
    const { list } = this.props;

    const meals =
      list && this.props.myMeals
        ? this.props.myMeals.filter(
            (meal) => meal.attributes.list.id === parseInt(this.props.listId)
          )
        : null;

    const listMeals =
      list && meals
        ? meals.map((meal) => (
            <li key={meal.id}>
              <Link to={`/meals/${meal.id}`}>
                <h5>{meal.attributes.name}</h5>
                <h6>{meal.attributes.description}</h6>
              </Link>
            </li>
          ))
        : null;

    return this.props.list ? (
      <div>
        <div className="ui one column grid">
          <div className="column">
            <div className="ui fluid card">
              <div className="content">
                <div className="header card-name">
                  <h3 className="listName">{list.attributes.name}</h3>
                </div>
                <HeaderExampleUsersIcon content={listMeals} />
                <ul className="list">{listMeals}</ul>
                <Link
                  className="ui primary button list-btn"
                  list={list}
                  to={`/lists/${list.id}/edit`}
                >
                  <h5>Edit this list</h5>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <h1>Add a new meal to this list:</h1>
        {renderedMeal ? (
          <EditMealFormWrapper
            pulledRecipe
            mealType={mealType}
            renderedMeal={renderedMeal}
            list={list}
            listId={list.id}
          />
        ) : (
          <NewMealFormWrapper
            mealType={mealType}
            renderedMeal={renderedMeal}
            listId={list.id}
          />
        )}
      </div>
    ) : (
      <div className="redirectIcon" onClick={() => history.push('/')}>
        <Header as="h2" icon textAlign="center">
          <Icon name="users" />
          <Header.Content>
            <h3>No lists available, log in or sign up!</h3>
          </Header.Content>
        </Header>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    myMeals: state.myMeals,
  };
};

export default withRouter(connect(mapStateToProps, { getMyMeals })(ListCard));
