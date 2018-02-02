import React, { Component } from 'react';
import CategoryList from '../CategoryList';
import TaskList from '../TaskList';
import EditTask from '../EditTask';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

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
