import React, { PureComponent } from 'react';
import AddButton from './buttons/AddButton';
import ExpandButton from './buttons/ExpandButton';
import RemoveButton from './buttons/DeleteButton';
import EditButton from './buttons/EditButton';

export default class Category extends PureComponent {
  render() {
    return (
      <div>
        <div className='category-view-controls'>
          <ExpandButton buttonTitle='Expand' />
          <span>{this.props.categoryName}</span>
          <EditButton buttonTitle='edit' itemType='category' />
        </div>
        <div className='category-item-controls'>
          <RemoveButton buttonTitle='Remove' />
          <AddButton buttonTitle='Add' />
        </div>
      </div>
    );
  }
}
