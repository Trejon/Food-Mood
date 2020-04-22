import React from 'react'; 
import history from '../../history'
import { Link, Route, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { Dropdown } from 'semantic-ui-react'

const Recipe = (props) => {

  const redirectToListAdd = (l) => {
    history.push(`/lists/${l.id}`)

  }

  let recipes = props.recipes.map(recipe => 
  <div className="column" key={recipe.recipe_id}> 
    <div className="ui fluid card" style={{height: '800px'}}>
      <div className="image">
        <img style={{height: '500px'}} src={recipe.image_url} alt={recipe.title} />
      </div>
      <div className="content">
        <a className="header" href={recipe.source_url} rel="noopener noreferrer" target="_blank"><h3>{recipe.title}</h3></a>
        <div className="description">
          <h5>Published by: {recipe.publisher}</h5>
        </div> 
      </div>

       <Dropdown className="ui button primary" text='Add to list'>
          <Dropdown.Menu className="menu">
           { props.lists.map(l => (
                // <Dropdown.Item key={l.id} text={l.attributes.name} onClick={() => redirectToListAdd(l)}/>))}
                <Link className='item' key={l.id} to={{pathname: `/lists/${l.id}`, query: {recipe: recipe}}}>{l.attributes.name}</Link>))}
          </Dropdown.Menu>
        </Dropdown>

        {/* <Link 
              to={{
                pathname: `/hello/${this.state.nextPage}`, 
                query:{thing: 'asdf', another1: 'stuff'}
              }}>
              Home 1
            </Link> */}



    </div>
  </div>);


  return(
    <div className="ui four column grid">
      {recipes}
    </div>
  )
}

const mapStateToProps = state => {
  return {
    lists: state.myLists
  }
}

export default connect(mapStateToProps)(Recipe);


// withRouter(connect(mapStateToProps, { getCurrentUser })(App));