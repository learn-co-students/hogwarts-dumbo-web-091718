import React from 'react'

var annoyingKey = 'weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'
var medal = 'highest medal achieved'

export default class HogDetails extends React.Component {
  render() {
    return (
      <div>
        <div><b>Specialty:</b> {this.props.hog.specialty}</div>
        <div><b>Greased:</b> {this.props.hog.greased}</div>
        <div><b>Weight Ratio:</b> {this.props.hog[annoyingKey]}</div>
        <div><b>Medal Achieved:</b> {this.props.hog[medal]}</div>
      </div>
    )
  }

}
