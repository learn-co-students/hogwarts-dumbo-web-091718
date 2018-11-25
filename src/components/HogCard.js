import React, { Component } from 'react';
import HogDetails from './HogDetails';

export default class HogCard extends Component {

  state = {
    ifClicked: false,
    showCard: true
  }

  clickHandler = () => {
    this.setState({
      ifClicked: !this.state.ifClicked
    })
  }

  buttonHandler = () => {
    this.setState({
      showCard: !this.state.showCard
    })
  }

  render() {
    return (
      <div className="column">
        <div className="ui card" onClick={this.clickHandler} style={{display: this.state.showCard ? 'block' : 'none'}}>
          <div className="image">
            <img src={require(`../hog-imgs/${this.nameReformat()}.jpg`)} alt=""/>
          </div>
          <div className="header">
            <h1>{this.props.hog.name}</h1>
          </div>
          <div className="description">
            {this.state.ifClicked ? <HogDetails hog={this.props.hog} /> : null}
          </div>
          <div className="extra content">
            <button className="ui basic red button" onClick={this.buttonHandler}>Hide the Hog</button>
          </div>
        </div>
      </div>
    )
  }

  nameReformat() {
    return this.props.hog.name.split(' ').join('_').toLowerCase()
  }

}
