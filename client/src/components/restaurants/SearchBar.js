import React from 'react';

class SearchBar extends React.Component {

  state = {
    term: ''
  };

  handleChange = (e) => {
    this.setState({
      term: e.target.value
    });
  };

  handleSubmit = (e) => {
    e.preventDefault()
    // console.log(this.state.term)
    this.props.onFormSubmit(this.state.term);
  };


  render() {
    return(
      <div className="search-bar ui segment">
        <form onSubmit={this.handleSubmit} className="ui form">
          <div className="field">
            <label>Enter Restaurant Name</label>
            <input
            type="text" value={this.state.term}
            onChange={this.handleChange}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
