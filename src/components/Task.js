import React, { Component } from 'react';
import CompletedCheckbox from './CompletedCheckbox';
import EditButton from './buttons/EditButton';

export default class Category extends Component {
  render() {
    return (
      <div>
        <div className='task-heading'>
          <CompletedCheckbox />
          <span>{this.props.taskName}</span>
          <EditButton buttonTitle='Edit' itemType='task'/>
        </div>
        <div className='task-edit'>
          <EditButton buttonTitle='Edit'/>
        </div>
      </div>
    )
  }
}
