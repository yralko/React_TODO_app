import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class EditButton extends Component {
  constructor() {
    super();

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    if (this.props.itemType === 'task') {


    }
  }

  render() {
    if (this.props.itemType === 'task') {
      return (
        <button onClick={this.handleClick}><Link to='/:id'>{this.props.buttonTitle}</Link></button>
      )
    }

    return (
      <button onClick={this.handleClick}>{this.props.buttonTitle}</button>
    )
  }
}
