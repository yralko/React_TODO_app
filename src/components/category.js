import React, { Component } from 'react';
import AddButton from './buttons/addButton';
import ExpandButton from './buttons/expandButton';
import RemoveButton from './buttons/removeButton';
import EditButton from './buttons/editButton';


export default class Category extends Component {
  render() {
    return (
      <div>
        <div className='category-view-controls'>
          <ExpandButton title={''}/>
          <span>{this.props.title}</span>
          <EditButton title={''}/>
        </div>
        <div className='category-item-controls'>
          <RemoveButton title={''}/>
          <AddButton title={''}/>
        </div>
      </div>
    )
  }
}
