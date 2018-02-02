import React, { Component } from 'react';
import CompletedCheckboxFilter from '../CompletedCheckboxFilter';
import SearchBox from '../SearchBox';
import ProgressBar from '../ProgressBar';

export default class Header extends Component {
  render() {
    return (
      <header>
        <img className='logo' src='' alt='A freshly tailored TODO app'/>
        <CompletedCheckboxFilter id='completed-tasks' text='Show done'/>
        <SearchBox placeholder='Search' className='search-box' buttonTitle='X'/>
        <ProgressBar />
      </header>
    )
  }
}
