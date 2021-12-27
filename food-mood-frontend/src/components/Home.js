import React from 'react';
import { connect } from 'react-redux';
import MyLists from './lists/MyLists';
import history from '../history';

import { Button, Divider, Form, Grid, Segment } from 'semantic-ui-react';
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
    if (!this.props.currentUser && this.state.signup) {
      return (
        <div>
          <h5 className="homeNote">Enable location to enjoy all features.</h5>
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
    } else if (!this.props.currentUser && !this.state.signup) {
      return (
        <div>
          <h5 className="homeNote">Enable location to enjoy all features.</h5>
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
      return <MyLists />;
    }
  }
}

const mapStateToProps = ({ currentUser }) => {
  return {
    currentUser,
  };
};

export default connect(mapStateToProps)(Home);
