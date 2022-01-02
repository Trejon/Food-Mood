import React from 'react';
import { connect } from 'react-redux';
import MyLists from './lists/MyLists';
import MyMeals from './meals/MyMeals';
import history from '../history';

import {
  Button,
  Divider,
  Header,
  Grid,
  Segment,
  Image,
  List,
  Icon,
  Search,
} from 'semantic-ui-react';
import AuthForm from './user/Login';
import SignUp from './user/SignUp';
import '../App.css';
class Home extends React.Component {
  state = {
    signup: false,
  };

  handleButtonClick = () => {
    this.setState((prevState) => ({
      signup: !prevState.signup,
    }));
  };

  render() {
    const { currentUser } = this.props;
    if (!currentUser && this.state.signup) {
      return (
        <div>
          <h5 className="homeNote">
            Enable location to search restaurants near you!
          </h5>
          <Segment placeholder>
            <Grid columns={2} relaxed="very" stackable>
              <Grid.Column className="homeGrid" verticalAlign="middle">
                <Button
                  className="homePageButton login"
                  // content="Login"
                  // icon="login"
                  size="massive"
                  onClick={this.handleButtonClick}
                >
                  Login{' '}
                </Button>{' '}
              </Grid.Column>
              <Grid.Column>
                <SignUp />
              </Grid.Column>{' '}
            </Grid>{' '}
            <Divider vertical> </Divider>{' '}
          </Segment>{' '}
        </div>
      );
    } else if (!currentUser && !this.state.signup) {
      return (
        <div>
          <h5 className="homeNote">
            Enable location to search restaurants near you!
          </h5>
          <Segment placeholder>
            <Grid columns={2} relaxed="very" stackable>
              <Grid.Column className="homeGrid" verticalAlign="middle">
                <Button
                  className="homePageButton"
                  // content="Sign Up"
                  // icon="signup"
                  size="massive"
                  onClick={this.handleButtonClick}
                >
                  Sign Up{' '}
                </Button>{' '}
              </Grid.Column>
              <Grid.Column>
                <AuthForm />
              </Grid.Column>{' '}
            </Grid>{' '}
            <Divider vertical> </Divider>{' '}
          </Segment>{' '}
        </div>
      );
    } else {
      return (
        <Segment placeholder>
          <Grid columns={2} stackable textAlign="center" padded="vertically">
            {/* <Divider vertical>Or</Divider> */}

            <Grid.Row verticalAlign="middle">
              <Grid.Column>
                <Header icon className="lists">
                  <Icon>
                    <img src="https://img.icons8.com/ios-filled/100/000000/wish-list.png" />{' '}
                  </Icon>
                  <h3>Your Lists:</h3>
                  <MyLists />
                </Header>
              </Grid.Column>

              <Grid.Column>
                <Header icon className="mealIconBox">
                  <Icon>
                    <img src="https://img.icons8.com/ios/100/000000/meal.png" />{' '}
                  </Icon>
                  <h3>Your Meals:</h3>
                  <MyMeals />
                </Header>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
      );
    }
  }
}

const mapStateToProps = ({ currentUser }) => {
  return {
    currentUser,
  };
};

export default connect(mapStateToProps)(Home);
