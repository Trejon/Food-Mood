import React from 'react'; 
import { connect } from 'react-redux';
import { logout } from '../../actions/currentUser';

const Logout = ({ logout }) => {
  const handleLogout = (event) => {
    event.preventDefault() 
    logout()
  }

  return(
    <div className="ui container">
      <div className="row">
        <div className="col-md-8 col-md-offset-2">
          <div className="panel panel-default">
            <div className="panel-body">
            <form className="ui form" onSubmit={handleLogout}> 
              <button type="submit" className="ui button primary">Logout</button>
            </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default connect(null, { logout })(Logout);