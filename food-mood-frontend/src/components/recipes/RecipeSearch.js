import axios from 'axios';
import React from 'react'; 

class RecipeSearch extends React.Component {
  state = {
    query: '',
    recipes: []
  };

    handleChange = (e) => {
      this.setState({
        query: e.target.value
      });
    };

    handleSubmit = (e) => {
      e.preventDefault()
      this.props.search(this.state.query);
    };

    render() {
      return(
        <div className="search-bar ui segment">
          <form onSubmit={this.handleSubmit} className="ui form">
            <div className="field">
              <label>Enter Recipe Name</label>
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

export default RecipeSearch;





// import React from 'react';
// import { requestOptions, url } from '../config.js'
// import { connect } from 'react-redux';

// class SearchBar extends React.Component {

//   state = {
//     term: '',
//     restaurants: []
//   };

//   handleChange = (e) => {
//     this.setState({
//       term: e.target.value
//     });
//   };

//   handleSubmit = (e) => {
//     e.preventDefault()
//     this.props.search(this.state.term);
//   };

//   componentDidUpdate() {
//     // console.log(this.state)
//   }


//   // componentDidMount() {
//   //   this.fetchYelpApi(this.state.term)
//   // }

//   render() {
//     // console.log(this.props)
//     return(
//       <div className="search-bar ui segment">
//         <form onSubmit={this.handleSubmit} className="ui form">
//           <div className="field">
//             <label>Enter Restaurant Name</label>
//             <input
//             type="text" value={this.state.term}
//             onChange={this.handleChange}
//             />
//           </div>
//         </form>
//       </div>
//     );
//   }
// }

// const mapStateToProps = state => {
//   return {
//     location: state.location
//   }
// }

// export default connect(mapStateToProps)(SearchBar);
