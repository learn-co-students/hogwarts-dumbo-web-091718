import React, { Component } from 'react';
// import PigInfo from './PigInfo'

const PigTile = (props) => {
  return (
    <div className="pigTile" onClick={props.handleClick}>
    <img
      src={require(`../hog-imgs/${props.pic}`)}
      alt="piggy"
    />
      <div>Name: {props.name}</div>
      {
        props.wasClickedOn && (
          <div>
            <div>Specialty: {props.specialty}</div>
            <div>Weight: {props.weight}</div>
            <div>Highest Medal Achieved: {props.highestMedalAchieved}</div>
          </div>
        )
      }
    </div>
  )
}

export default PigTile 