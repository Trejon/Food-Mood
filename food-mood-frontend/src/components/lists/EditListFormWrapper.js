import React from 'react';
import { updateList, deleteList } from '../../actions/myLists'; 
import {  setFormDataForEdit, resetListForm } from '../../actions/listForm';
import { connect } from 'react-redux';
import ListForm from './ListForm';
import { render } from 'react-dom';

class EditListFormWrapper extends React.Component {
  componentDidMount() { 
    this.props.list && this.props.setFormDataForEdit(this.props.list)
  }

  componentDidUpdate(prevProps) {
    this.props.list && !prevProps.list && this.props.setFormDataForEdit(this.props.list)
  }

  componentWillUnmount() {
    this.props.resetListForm()
  }

  handleSubmit = (event, formData, userId ) => {
     const { updateList, list } = this.props
    event.preventDefault()
    updateList({
      ...formData,
      listId: list.id,  
      userId
    })
  }  

  render() {
    const { deleteList, list } = this.props
    const listId = list ? list.id : null
    return (
      <div>
        <>
          <ListForm editMode handleSubmit={this.handleSubmit} />
          <br/>
          <button className="negative ui button" onClick={() => deleteList(listId)}>Delete this list</button>
        </>
      </div>
    );
    }
  }

export default connect(null, { updateList, setFormDataForEdit, resetListForm, deleteList })(EditListFormWrapper);
