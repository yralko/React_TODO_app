import React, { Component } from 'react';
import Task from './Task';

export default class EditTask extends Component {
  render() {
    return (
      <div>
        <span>that is an edit list {this.props.match.params.id}</span>
      </div>
    )
  }
}
