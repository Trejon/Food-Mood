import React from 'react';
import { signup } from '../../actions/currentUser';
import { connect } from 'react-redux';
import { Input, Form } from 'semantic-ui-react';

class SignUp extends React.Component {
  state = {
    name: '',
    email: '',
    password: '',
  };

  handleOnChange = (event) => {
    const { value, name } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleOnSubmit = (event) => {
    event.preventDefault();
    this.props.signup(this.state);
  };

  render() {
    return (
      <div className="ui container">
        <div className="row">
          <div className="col-md-8 col-md-offset-2">
            <div className="panel panel-default">
              <div className="panel-body">
                <form
                  className="ui form signUp homepage"
                  onSubmit={this.handleOnSubmit}
                >
                  <div className="field">
                    <input
                      className="formInputEl"
                      type="text"
                      placeholder="Name"
                      value={this.state.name}
                      name="name"
                      onChange={this.handleOnChange}
                      autoComplete="off"
                      // focus
                      required
                    />
                  </div>{' '}
                  <div className="field">
                    <input
                      className="formInputEl"
                      type="text"
                      placeholder="Email"
                      value={this.state.email}
                      name="email"
                      onChange={this.handleOnChange}
                      autoComplete="off"
                      // focus
                      required
                    />
                  </div>{' '}
                  <div className="field">
                    <input
                      className="formInputEl"
                      type="password"
                      placeholder="password"
                      value={this.state.password}
                      name="password"
                      onChange={this.handleOnChange}
                      autoComplete="off"
                      // focus
                      required
                    />
                  </div>{' '}
                  <button type="submit" className="ui button primary auth">
                    Sign Up{' '}
                  </button>{' '}
                </form>{' '}
              </div>{' '}
            </div>{' '}
          </div>{' '}
        </div>{' '}
      </div>
    );
  }
}

export default connect(null, { signup })(SignUp);
