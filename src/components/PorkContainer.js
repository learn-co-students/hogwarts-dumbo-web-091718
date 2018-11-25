import React, { Component } from 'react';
import HogCard from './HogCard';
import Filter from './Filter';

export default class PorkContainer extends Component {

  state = {
    hogs: this.props.hogs,
    filter: 'all'
  }

  changeFilter = (e) => {
    // debugger
    // console.log(e)
    this.setState({
      filter: e.target.value
    }, () => this.submitFilter())
  }

  submitFilter() {
    let newArr = [...this.props.hogs]
    let weight = 'weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'
    if (this.state.filter === 'name') {
      this.setState({
        hogs: newArr.sort((a,b) => {
          return a.name.localeCompare(b.name)
        })
      })
      // debugger
    } else if (this.state.filter === 'weight') {
      this.setState({
        hogs: newArr.sort((a,b) => {
          return a[weight] - b[weight]
        })
      })
    } else if (this.state.filter === 'greased') {
      this.setState({
        hogs: newArr.filter(hog => {
          return hog.greased === true
        })
      })
    } else {
      this.setState({
        hogs: newArr
      })
    }
  }

  render() {
    let arrayOfHogs = this.state.hogs.map(hogObj => {
      return (
        <HogCard hog={hogObj}/>
      )
    })
    return (
      <div>
        <div className="ui header">
          <Filter changeFilter={this.changeFilter} />
        </div>
        <div className="ui three column grid">
          {arrayOfHogs}
        </div>
      </div>
    )
  }
  
}
