import React, { Component } from 'react';

export default class CloseButton extends Component {
  render() {
    return (
      <button>{this.props.buttonTitle}</button>
    )
  }
}
