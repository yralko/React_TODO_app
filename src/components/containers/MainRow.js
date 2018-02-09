import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import CategoryList from '../CategoryList';
import TaskList from '../TaskList';
import EditTask from '../EditTask';

export default class MainRow extends Component {
  render() {
    return (
      <div>
        <CategoryList />
        <Switch>
          <Route exact path='/' component={TaskList} />
          <Route path='/:id' component={EditTask} />
        </Switch>
      </div>
    )
  }
}
