import React, { Component } from 'react';
import AddItem from '../AddItem';

export default class TitleRow extends Component {
  render() {
    return (
      <div>
        <AddItem className='add-category' placeholder='Enter category title' buttonTitle='Add' inputID='new-category'/>
        <AddItem className='add-task' placeholder='Enter task name' buttonTitle='Add' inputID='new-task'/>
      </div>
    )
  }
}
