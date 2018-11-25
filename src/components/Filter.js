import React, { Component } from 'react';

export default class Filter extends Component {

  render() {
    return (
      <select className="ui search dropdown" onChange={(e) => this.props.changeFilter(e)}>
        <option value="all">Sort By</option>
        <option value="name">Name</option>
        <option value="weight">Weight</option>
        <option value="greased">Greased</option>
      </select>
    )
  }
}
