import React from 'react'
import HogDetails from './HogDetails'

export default class HogCard extends React.Component {

  state = {
    ifClicked: false,
    showCard: true
  }

  render() {

    return (
      <div className="column">
        <div className="ui card" style={{display: this.state.showCard ? 'block' : 'none' }} onClick={this.clickHandler}>
          <div className="header">
            <h1>{this.props.hog.name}</h1>
          </div>

          <div className="image">
            <img src={require(`../hog-imgs/${this.nameReformat()}.jpg`)} alt="some hog" />
          </div>
          <button onClick={this.componentHandler}>Hide Ham</button>
          {this.state.ifClicked ? <HogDetails hog={this.props.hog} /> : null}
        </div>
      </div>
    )

  }

  clickHandler = () => {
    this.setState({
      ifClicked: !this.state.ifClicked
    })
  }

  componentHandler = () => {
    this.setState({
      showCard: !this.state.showCard
    })
  }

  nameReformat() {
    let name = this.props.hog.name.split(' ').join('_').toLowerCase()
    return name
  }


}
