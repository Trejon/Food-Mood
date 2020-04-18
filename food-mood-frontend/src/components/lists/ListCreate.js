import React from 'react'; 
import ListForm from './NewListForm';

const ListCreate = () => {
  return( 
  <div>
    <h1>Create a new List:</h1>
    {<ListForm/>}
  </div>)
};

export default ListCreate;