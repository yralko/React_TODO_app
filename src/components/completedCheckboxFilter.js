import React, { Component } from 'react';

export default class CompletedCheckboxFilter extends Component {
  render() {
    return (
      <div>
        <input type='checkbox' name='' id={this.props.id} />
        <label htmlFor={this.props.id}>{this.props.text}</label>
      </div>
    )
  }
}
