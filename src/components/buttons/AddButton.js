import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { addCategory, addTask } from '../../actions/actions';

class AddButton extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const inputValue = document.getElementById(this.props.inputType).value;

    switch (this.props.inputType) {
      case 'new-category':
        this.props.addCategory(inputValue);
        break;
      case 'new-task':
        this.props.addTask(inputValue);
        break;
      default:
    }
  }

  render() {
    return (
      <button onClick={this.handleClick}>{this.props.buttonTitle}</button>
    );
  }
}

function mapStateToProps(state) {
  return {
    categories: state.categories,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    addCategory,
    addTask,
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(AddButton);
