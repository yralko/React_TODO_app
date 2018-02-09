import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { deleteTask } from '../../actions/actions';

class RemoveButton extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(id) {
    console.log(this.props);
    this.props.removeItem(id);

  }

  render() {
    window.act = this.handleClick;
    return (
      <button onClick={this.handleClick}>{this.props.buttonTitle}</button>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    categories: state.categories
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      deleteTask,
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(RemoveButton);
