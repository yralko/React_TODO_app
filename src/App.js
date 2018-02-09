import React, { Component } from 'react';
import Header from './components/containers/Header';
import TitleRow from './components/containers/TitleRow';
import MainRow from './components/containers/MainRow';
import CategoryList from './components/containers/MainRow';
import { Route, Switch } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <TitleRow />
        <MainRow />
      </div>
    )
  }
}

export default App;
