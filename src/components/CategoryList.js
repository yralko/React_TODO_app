import React, { PureComponent } from 'react';
import uniqid from 'uniqid';
import { connect } from 'react-redux';
import Category from './Category';

class CategoryList extends PureComponent {
  render() {
    const items = this.props.categories.map(v => (
      <Category categoryName={v.name} key={uniqid()} />
    ));

    return (
      <div>
        {items}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    categories: state.categories,
  };
}

export default connect(mapStateToProps)(CategoryList);
