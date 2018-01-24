import React, { Component } from 'react';
import CompletedCheckboxFilter from './components/completedCheckboxFilter';
import SearchBox from './components/searchBox';
import ProgressBar from './components/progressBar';
import NewItem from './components/newItem';
import Category from './components/category';
import Task from './components/task';

class App extends Component {
  render() {
    return (
      <div>
        <header>
          <img className='logo' src='' alt='A freshly tailored TODO app'/>
          <CompletedCheckboxFilter id='completed-tasks' text='Show done'/>
          <SearchBox placeholder='Search' className='search-box'/>
        </header>
        <main>
          <div class="top-row">
            <ProgressBar className='progress-bar' />
            <NewItem type='category' placeholder='Enter category title'/>
            <NewItem type='task' placeholder='Text input with button'/>
          </div>
          <div class="main-row">
            <div class="category-list">
              <Category title='Category name'/>
            </div>
            <div class="task-list">
              <Task />
            </div>
          </div>
        </main>
      </div>
    )
  }
}

export default App;
