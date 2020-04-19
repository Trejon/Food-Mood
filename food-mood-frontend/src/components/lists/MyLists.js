import React from 'react'; 
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const MyLists = (props) => {
  const listCards = props.lists.length > 0 ? 
    props.lists.map(l => (<h4 key={l.id}><Link to={`/lists/${l.id}`}>{l.attributes.name}</Link><br /></h4>)) : <h2>This is my lists with an empty array of lists</h2>
  return(
    <>
    <h2>Here's your planned lists</h2>
      <ul>{listCards}</ul>
    </> 
    
  )
}

const mapStateToProps = ({ myLists }) => {
  return {
    lists: myLists
  }
}

export default connect(mapStateToProps)(MyLists);