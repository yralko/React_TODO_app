import React from 'react';
import AddItem from '../AddItem';

export default function TitleRow() {
  return (
    <div>
      <AddItem className='add-category' placeholder='Enter category title' buttonTitle='Add' inputType='new-category' />
      <AddItem className='add-task' placeholder='Enter task name' buttonTitle='Add' inputType='new-task' />
    </div>
  );
}
