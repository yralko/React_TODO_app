import React, { Component } from 'react';
import Task from './Task'
import uniqid from 'uniqid'

export default class TaskList extends Component {
  render() {
    return (
      <div>
        <Task taskName={uniqid('task-')}/>
        <Task taskName={uniqid('task-')}/>
        <Task taskName={uniqid('task-')}/>
        <Task taskName={uniqid('task-')}/>
      </div>
    )
  }
}
