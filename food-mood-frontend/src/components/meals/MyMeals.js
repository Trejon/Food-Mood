import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Icon, List } from 'semantic-ui-react';

const MyMeals = (props) => {
  const mealCards =
    props.meals.length > 0 ? (
      props.meals.map((m) => (
        <List.Item className="item" key={m.id}>
          <List.Icon size="massive" verticalAlign="middle">
            <img src="https://img.icons8.com/pastel-glyph/64/000000/meal--v1.png" />
          </List.Icon>
          <List.Content>
            <List.Header as="a">
              <h5>
                <Link to={`/meals/${m.id}`}> {m.attributes.name} </Link>
              </h5>
            </List.Header>
            <List.Description> {m.attributes.description} </List.Description>{' '}
          </List.Content>
        </List.Item>
      ))
    ) : (
      <h2> You currently don 't have any meals.</h2>
    );

  return (
    <div className="list-content ">
      <h3>These are your meals:</h3>

      <List divided relaxed animated celled size="massive">
        {mealCards}{' '}
      </List>
      <Link className="ui button primary" to="/meals/new">
        Create A New Meal
      </Link>
    </div>
  );
};

const mapStateToProps = ({ myMeals }) => {
  return {
    meals: myMeals,
  };
};

export default connect(mapStateToProps)(MyMeals);
