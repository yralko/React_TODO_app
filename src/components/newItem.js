import React, { Component } from 'react';

export default class NewItem extends Component {
  render() {
    return (
      <form>
        <input type='text' placeholder={this.props.placeholder}/>
        <input type='submit' value='Add'/>
      </form>
    )
  }
}
