import React, { Component } from 'react';
import store from '../../store/store';
import uniqid from 'uniqid';
import { Link, Route } from 'react-router-dom';
import Header from '../containers/Header';

export default class AddButton extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(text) {
    const input = document.getElementById(this.props.inputID);
  }

  render() {
    return (
      <button onClick={this.handleClick}>{this.props.buttonTitle}</button>
    )
  }
}
