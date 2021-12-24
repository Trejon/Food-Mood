import React from 'react';
import { connect } from 'react-redux';
import MyLists from './lists/MyLists';
import history from '../history';

import { Button, Divider, Form, Grid, Segment } from 'semantic-ui-react';
import AuthForm from './user/Login';

const DividerExampleVerticalForm = () => (
  <Segment placeholder>
    <Grid columns={2} relaxed="very" stackable>
      <Grid.Column verticalAlign="middle">
        <Button
          content="Sign up"
          icon="signup"
          size="big"
          onClick={() => history.push('/signup')}
        />
      </Grid.Column>

      <Grid.Column>
        <AuthForm />
      </Grid.Column>
    </Grid>

    <Divider vertical></Divider>
  </Segment>
);
class Home extends React.Component {
  render() {
    return (
      <div>
        {' '}
        {!this.props.currentUser ? (
          <div className="ui message">
            <div className="ui center aligned header">
              <br />
              <h3>Enable your location to enjoy all of the features. </h3>{' '}
              <h6>
                {' '}
                <DividerExampleVerticalForm />
                Note: Google Map will have a filter due to the free API.{' '}
              </h6>{' '}
            </div>{' '}
          </div>
        ) : (
          <MyLists />
        )}{' '}
      </div>
    );
  }
}

const mapStateToProps = ({ currentUser }) => {
  return {
    currentUser,
  };
};

export default connect(mapStateToProps)(Home);
