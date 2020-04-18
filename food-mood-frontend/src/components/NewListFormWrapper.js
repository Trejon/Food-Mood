import React from 'react';
import { createList } from '../actions/myLists'; 
import { connect } from 'react-redux';
import ListForm from '../components/lists/ListForm';

const NewListFormWrapper = ({ createList }) => {

  const handleSubmit = (event, formData, userId ) => {
    event.preventDefault()
    createList({
      ...formData,  
      userId
    })
  }

  return (
    <div>
      <ListForm handleSubmit={handleSubmit} />
    </div>
  );
}

export default connect(null, { createList })(NewListFormWrapper);
