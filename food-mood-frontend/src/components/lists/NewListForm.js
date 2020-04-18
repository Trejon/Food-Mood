import React from 'react'; 
import { updateNewListForm } from '../../actions/newListForm';
import { createList } from '../../actions/myLists';
import { connect } from 'react-redux';

const NewListForm = ({ formData, updateNewListForm, createList, userId}) => {
  const { name, description } = formData
  
  const handleChange = event => {
    const { name, value} = event.target
    updateNewListForm(name, value)
  }
 
  const handleSubmit = (event) => {
    event.preventDefault()
    createList({
      ...formData, 
      userId
    })
  }
  
  return (
    <form className="ui form" onSubmit={handleSubmit}> 
      <input 
        name="name"
        onChange={handleChange}
        value={name}
        placeholder="Name"
      /><br /><br/>
      <input 
        name="description"
        onChange={handleChange}
        value={description}
        placeholder="Description"
      />
      <button className="ui primary button" type="submit">Submit</button>
    </form>
  )
}

const mapStateToProps = state => {
  const userId =  state.currentUser ? state.currentUser.currentUser.data.id : ""
  return {
    formData: state.newListForm, 
    userId
  }
}

export default connect(mapStateToProps, { updateNewListForm, createList })(NewListForm);