import React from 'react'; 
import axios from 'axios';
import history from '../../history';

class SignIn extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      email: '', 
      password: '', 
      loginErrors: '', 
      user: {}, 
      token: ''
    }
  }

  handleOnChange = (event) => {
    const { value, name } = event.target; 
    this.setState({
      [name]: value
    })
  }

   headers = () => {
    let baseHeaders = {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
    if(this.token){
      baseHeaders = { ...baseHeaders, 'Authorization': `Bearer ${this.token}`}
    }
    return baseHeaders
  }

  // login = (params) => {
  // const res = fetch('http://localhost:3001/login', {
  //     method: 'POST', 
  //     headers: { 
  //       'Content-Type': 'application/json' 
  //     }, 
  //     body: JSON.stringify(params)
  //    })
     
  // }

  // getJWTToken = async(params) => {
  //   const url = "http:localhost:3001/login"
  //   const res = await fetch(url, {method: 'POST', headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' }, body: JSON.stringify(params) })
  //   const token = await res.headers.get('authorization')
  //   return token
  // }

  getJWTToken = (params) => {
    const url = "http:localhost:3001/login"
    const res = fetch("http:localhost:3001/login", {method: 'POST', headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' }, body: JSON.stringify(params) }).then(res => this.setState({
      token: res.headers.get('authorization')
    })
    )
  }



  handleOnSubmit = (event) => {
    event.preventDefault();
    const { email, password } = this.state;
    const params = {
      user: {email, password}
    }
    this.getJWTToken(params)
    const url = "http://localhost:3001/login"
    fetch(url, {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json' ,
        'Authorization': this.state.token
      }, 
      body: JSON.stringify(params)
    })
    .then(res => res.json())
    .then(resJSON => {
      this.setState({
        user: resJSON
      })
    })
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
                  <label>Password:</label>
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

export default SignIn;