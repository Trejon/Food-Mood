import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../../actions/currentUser';
import { Link } from 'react-router-dom';
import history from '../../history';
import Modal from '../Modal';

class Logout extends React.Component {
  state = {
    showBox: false,
  };

  showBoxToggle = () => this.setState({ showBox: true });

  hideBoxToggle = () => this.setState({ showBox: false });

  handleLogout = (event) => {
    event.preventDefault();
    this.props.logout();
    history.push('/');
  };

  renderActions = () => {
    return (
      <>
        <button className="ui button negative" onClick={this.handleLogout}>
          Log Out{' '}
        </button>{' '}
        <button
          className="ui button"
          onClick={() => this.setState({ showBox: false })}
        >
          Cancel{' '}
        </button>{' '}
      </>
    );
  };

  renderContent = () => {
    if (!this.props.currentUser) {
      return 'Please log in to your account.';
    }
    return `Are you sure you want to log out ${this.props.currentUser.currentUser.data.attributes.name}?`;
  };

  render() {
    console.log(this.props);
    if (this.state.showBox) {
      return (
        <div>
          <Modal
            title="Log Out"
            content={this.renderContent()}
            actions={this.renderActions()}
            onDismiss={() => history.push('/')}
          />
        </div>
      );
    } else {
      return (
        <div className="ui container">
          <div className="row">
            <div className="col-md-8 col-md-offset-2">
              <div className="panel panel-default">
                <div className="panel-body">
                  <form className="ui form" onSubmit={this.showBoxToggle}>
                    <button
                      type="submit"
                      className="ui button negative"
                      onMouseLeave={this.hideBoxToggle}
                    >
                      Logout
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}

const mapStateToProps = ({ currentUser }) => {
  return {
    currentUser,
  };
};

export default connect(mapStateToProps, { logout })(Logout);
