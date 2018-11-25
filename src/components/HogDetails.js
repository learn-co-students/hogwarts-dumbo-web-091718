import React, { Component } from 'react';

var weight = 'weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'
var medal = 'highest medal achieved'
export default class HogDetails extends Component {

  render() {
    return (
      <div>
        <div><b>Specialty:</b> {this.props.hog.specialty}</div>
        <div><b>Greased:</b> {this.props.hog.greased? 'Yes' : 'No'}</div>
        <div><b>Weight Ratio:</b> {this.props.hog[weight]}</div>
        <div><b>Medal Achieved:</b> {this.props.hog[medal]}</div>
      </div>
    )
  }
}
