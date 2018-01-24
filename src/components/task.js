import React, { Component } from 'react';
import CompletedCheckbox from './completedCheckbox';
import EditButton from './buttons/editButton';

export default class Category extends Component {
  render() {
    return (
      <div>
        <div className='task-heading'>
          <CompletedCheckbox />
          <span>{this.props.title}</span>
          <EditButton title={''}/>
        </div>
        <div className='task-edit'>
          <EditButton title={''}/>
        </div>

      </div>
    )
  }
}
