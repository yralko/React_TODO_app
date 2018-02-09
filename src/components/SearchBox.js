import React, { Component } from 'react';

export default class SearchBox extends Component {
  render() {
    return (
      <form>
        <input type='text' name='' placeholder={this.props.placeholder} />
        <button>X</button>
      </form>
    )
  }
}
