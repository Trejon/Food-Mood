import React from 'react';
import { updateList } from '../actions/myLists'; 
import {  setFormDataForEdit, resetListForm } from '../actions/listForm';
import { connect } from 'react-redux';
import ListForm from '../components/lists/ListForm';
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
    return (
      <div>
        <ListForm editMode handleSubmit={this.handleSubmit} />
      </div>
    );
    }
  }

export default connect(null, { updateList, setFormDataForEdit, resetListForm })(EditListFormWrapper);
