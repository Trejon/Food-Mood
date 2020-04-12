import React from 'react'; 
import { connect } from 'react-redux'; 
import { signIn } from '../../actions';

class AuthForm extends React.Component {
  state = {
    email: '', 
    password: ''
  }

  handleOnChange = (event) => {
    const { value, name } = event.target; 
    this.setState({
      [name]: value
    })
  }

  handleOnSubmit = (event) => {
    event.preventDefault();
    console.log(this.state)
  }


  render() {
    return(
      <div className="ui container">
        <div className="row">
          <div className="col-md-8 col-md-offset-2">
            <div className="panel panel-default">
              <div className="panel-body">
              <form className="ui form" onSubmit={this.handleOnSubmit}>
                <div className="field">
                  <label>Email:</label>
                  <input type="text" placeholder="Email" value={this.state.email} name="email" onChange={this.handleOnChange} />
                </div>
                <div className="field">
                  <label>Email:</label>
                  <input type="password" placeholder="password" value={this.state.password} name="password" onChange={this.handleOnChange}/>
                </div>
                <button type="submit" className="ui button primary">Submit</button>
              </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default AuthForm;