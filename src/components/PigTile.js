import React from 'react';

const PigTile = (props) => {
  const toggleInfo = () => {
    const template =  <div>
                        <div>Specialty: {props.specialty}</div>
                        <div>Weight: {props.weight}</div>
                        <div>Highest Medal Achieved: {props.highestMedalAchieved}</div>
                      </div>
    return props.wasClickedOn && template 
  }

  return (
    <div className="pigTile" onClick={props.handleClick}>
      <img src={require(`../hog-imgs/${props.pic}`)} alt="piggy" />
      <div>Name: {props.name}</div>
      { toggleInfo() }
    </div>
  )
}

export default PigTile 