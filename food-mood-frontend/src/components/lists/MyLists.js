import React from 'react'; 
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const MyLists = (props) => {
  const listCards = props.lists.length > 0 ? 
    props.lists.map(l => (<p key={l.id}><Link to={`/lists/${l.id}`}>{l.attributes.name}</Link><br /></p>)) : <h2>This is my lists with an empty array of lists</h2>
  return(
    <>
    <h1>Heres your lists:</h1>
      {listCards}
    </> 
    
  )
}

const mapStateToProps = ({ myLists }) => {
  return {
    lists: myLists
  }
}

export default connect(mapStateToProps)(MyLists);