import React from 'react'; 
import { connect } from 'react-redux';
import { updateLoginForm } from '../../actions/loginForm';
import { login } from '../../actions/currentUser';

const Login = ({ loginFormData, updateLoginForm, login }) => {
 
  const handleChange = event => {
    const { name, value } = event.target
    const updatedFormInfo = { 
      ...loginFormData, 
      [name]: value
    }
    updateLoginForm(updatedFormInfo)
  }

  const handleSubmit = event => {
    event.preventDefault()
    // getJWTToken(loginFormData)
    login(loginFormData)
  }

  return(
    <div className="ui container">
      <div className="row">
        <div className="col-md-8 col-md-offset-2">
          <div className="panel panel-default">
            <div className="panel-body">
            <form className="ui form" onSubmit={handleSubmit}>
              <div className="field">
                <label>Email:</label>
                <input type="text" placeholder="Email" value={loginFormData.email} name="email" onChange={handleChange} />
              </div>
              <div className="field">
                <label>Password:</label>
                <input type="password" placeholder="password" value={loginFormData.password} name="password" onChange={handleChange}/>
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

const mapStateToProps = state => {
  return {
    loginFormData: state.loginForm
  }
}

export default connect(mapStateToProps, { updateLoginForm, login })(Login);