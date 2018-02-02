import React, { Component } from 'react';
import Category from './Category';
import uniqid from 'uniqid';

export default class Main extends Component {
  render() {
    return (
      <main>
        <Category categoryName={uniqid('CATEGORY-')}/>
        <Category categoryName={uniqid('CATEGORY-')}/>
        <Category categoryName={uniqid('CATEGORY-')}/>
        <Category categoryName={uniqid('CATEGORY-')}/>
      </main>
    )
  }
}
