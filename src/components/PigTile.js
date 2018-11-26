import React from 'react';

const PigTile = (props) => {
  const template = <div>
    <div>Specialty: {props.specialty}</div>
    <div>Weight:    {props.weight}</div>
    <div>Highest Medal Achieved: {props.highestMedalAchieved}</div>
  </div>

  return (
    <div className="pigTile" onClick={props.handleClick}>
      <img src={require(`../hog-imgs/${props.pic}`)} alt="piggy" />
      <div>Name: {props.name}</div>
      { props.wasClickedOn && template }
    </div>
  )
}

export default PigTile 