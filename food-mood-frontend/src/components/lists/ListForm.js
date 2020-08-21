import React from 'react'; 
import { updateListForm } from '../../actions/listForm';
import { connect } from 'react-redux';

const ListForm = ({ formData, updateListForm, userId, list, handleSubmit, editMode }) => {
  const { name, description } = formData
  
  const handleChange = event => {
    const { name, value} = event.target
    updateListForm(name, value)
  } 
  
  return (
    <form className="ui form list-form" onSubmit={event => handleSubmit(event, formData)}> 
      <input 
        name="name"
        onChange={handleChange}
        value={name}
        placeholder="Name"
        autoComplete="off"
        className="list-input"
      /><br /><br/>
      <input 
        name="description"
        onChange={handleChange}
        value={description}
        placeholder="Description"
        autoComplete="off"
        className="list-input"
      />
      <button className="ui primary button list-btn" type="submit">{editMode ? "Update List" : "Create List"}</button>
    </form>
  )
}

const mapStateToProps = state => {
  const userId =  state.currentUser ? state.currentUser.currentUser.data.id : ""
  return {
    formData: state.ListForm, 
    userId
  }
}

export default connect(mapStateToProps, { updateListForm })(ListForm);