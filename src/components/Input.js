import React, { PureComponent } from 'react';

export default class Input extends PureComponent {
  render() {
    return (
      <input id={this.props.inputType} />
    );
  }
}
