import React, { Component } from 'react';

export default class ExpandButton extends Component {
  render() {
    return (
      <button>{this.props.buttonTitle}</button>
    )
  }
}
