import React from 'react'; 

const Recipe = (props) => {

  let recipes = props.recipes.map(recipe => 
  <div className="column"> 
    <div className="ui fluid card">
      <div className="image">
        <img style={{height: '500px'}} src={recipe.image_url} alt={recipe.title} />
      </div>
      <div className="content">
        <a className="header" href={recipe.source_url} rel="noopener noreferrer" target="_blank"><h3>{recipe.title}</h3></a>
        <div className="description">
          <h5>Published by: {recipe.publisher}</h5>
        </div> 
        <div className="extra">
          Publisher Website: 
          <a href={recipe.source_url} target="_blank" rel="noopener noreferrer"><h3>{recipe.publisher_url}</h3></a>
        </div>
      </div>
    </div>
  </div>);
  
  return(
    <div className="ui four column grid">
      {recipes}
    </div>
  )
}

export default Recipe;