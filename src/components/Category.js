import React, { Component } from 'react';
import AddButton from './buttons/AddButton';
import ExpandButton from './buttons/ExpandButton';
import RemoveButton from './buttons/RemoveButton';
import EditButton from './buttons/EditButton';


export default class Category extends Component {
  render() {
    return (
      <div>
        <div className='category-view-controls'>
          <ExpandButton buttonTitle='Expand'/>
          <span>{this.props.categoryName}</span>
          <EditButton buttonTitle='edit' itemType='category'/>
        </div>
        <div className='category-item-controls'>
          <RemoveButton buttonTitle='Remove'/>
          <AddButton buttonTitle='Add'/>
        </div>
      </div>
    )
  }
}
