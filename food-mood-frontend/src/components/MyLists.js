import React from 'react'; 
import ListCard from './ListCard';
import { connect } from 'react-redux';

const MyLists = (props) => {
  const listCards = props.lists.length > 0 ? props.lists.map(l => <ListCard list={l} key={l.id}/>) : null
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