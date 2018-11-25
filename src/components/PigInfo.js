import React, { Component } from 'react';
import PigTile from './PigTile'

class PigInfo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: this.props.name, 
      specialty: this.props.specialty,
      greased: this.props.greased,
      weight: this.props.weight,
      clicked: false 
    }

    this.handleClick = this.handleClick.bind(this)
  }
  
  handleClick = (e) => {
    this.setState(prevState => ({ clicked: !prevState.clicked }))
  }

  handleFilter() {

  }

  render() {
    return (
      <div>
        <PigTile
          name={this.props.name}
          specialty={this.props.specialty}
          greased={this.props.greased}
          pic={this.props.pic}
          highestMedalAchieved={this.props.highestMedalAchieved}
          weight={this.props.weight}
          handleClick={this.handleClick}
          wasClickedOn={this.state.clicked}
        />
      </div>
    )
  }
}

export default PigInfo