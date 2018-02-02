import React, { Component } from 'react';
import Input from './Input';
import AddButton from './buttons/AddButton';

export default class AddItem extends Component {
  render() {
    return (
      <div>
        <Input placeholder={this.props.placeholder} inputID={this.props.inputID}/>
        <AddButton buttonTitle={this.props.buttonTitle} inputID={this.props.inputID}/>
      </div>
    )
  }
}
