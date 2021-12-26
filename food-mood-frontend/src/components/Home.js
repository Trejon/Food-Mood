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
          <Segment placeholder>
            <Grid columns={2} relaxed="very" stackable>
              <Grid.Column className="homeGrid" verticalAlign="middle">
                <Button
                  content="Login"
                  icon="login"
                  size="massive"
                  onClick={this.handleButtonClick}
                >
                  Login
                </Button>
              </Grid.Column>

              <Grid.Column>
                <SignUp />
              </Grid.Column>
            </Grid>
            <Divider vertical></Divider>
          </Segment>
        </div>
      );
    } else if (!this.props.currentUser && !this.state.signup) {
      return (
        <div>
          <Segment placeholder>
            <Grid columns={2} relaxed="very" stackable>
              <Grid.Column className="homeGrid" verticalAlign="middle">
                <Button
                  content="Sign Up"
                  icon="signup"
                  size="massive"
                  onClick={this.handleButtonClick}
                >
                  Sign Up
                </Button>
              </Grid.Column>

              <Grid.Column>
                <AuthForm
                  content="Log Up"
                  icon="login"
                  size="massive"
                  onClick={() => this.handleButtonClick}
                >
                  Log In
                </AuthForm>
              </Grid.Column>
            </Grid>
            <Divider vertical></Divider>
          </Segment>
        </div>
      );
    } else {
      return <MyLists />;
    }
    //     <div>
    //       {' '}
    //       <div className="ui message">
    //         <div className="ui center aligned header">
    //           <br />
    //           <h3>Enable your location to enjoy all of the features. </h3>{' '}
    //           <h6>
    //             {' '}
    //             {/* <AccountHomePage /> */}
    //             <SignUpPage />
    //             Note: Google Map will have a filter due to the free API.{' '}
    //           </h6>{' '}
    //         </div>{' '}
    //       </div>
    //     </div>
    //   );
    // } else if (!this.props.currentUser && !this.state.signup) {
    //   return (
    //     <div>
    //       {' '}
    //       <div className="ui message">
    //         <div className="ui center aligned header">
    //           <br />
    //           <h3>Enable your location to enjoy all of the features. </h3>{' '}
    //           <h6>
    //             {' '}
    //             {/* <AccountHomePage /> */}
    //             <LoginPage />
    //             Note: Google Map will have a filter due to the free API.{' '}
    //           </h6>{' '}
    //         </div>{' '}
    //       </div>
    //     </div>
    //   );
    // } else {
    //   return <MyLists />;
  }
}

const mapStateToProps = ({ currentUser }) => {
  return {
    currentUser,
  };
};

export default connect(mapStateToProps)(Home);
