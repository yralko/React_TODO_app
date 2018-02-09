import React, { PureComponent } from 'react';
import Input from './Input';
import AddButton from './buttons/AddButton';

export default class AddItem extends PureComponent {
  render() {
    return (
      <div>
        <Input placeholder={this.props.placeholder} inputType={this.props.inputType} />
        <AddButton buttonTitle={this.props.buttonTitle} inputType={this.props.inputType} />
      </div>
    );
  }
}
