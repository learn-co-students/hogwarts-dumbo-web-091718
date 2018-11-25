import React from 'react'
import HogCard from './HogCard'
import Filter from './Filter'

export default class PorkContainer extends React.Component {

  state = {
    hogs: this.props.hogs,
    filter: ""
  }

  render() {
    // console.log(this.props.hogs)

    let arrayOfHogs = this.state.hogs.map(hogObj => {
      // 'onClick' will have user click on card and show details
      return (
        <div>
          <HogCard hog={hogObj} />
        </div>
      )
    })
    return (
      <div>
        <Filter onChange={this.changeHandler} onClick={this.clickHandler} />
        {arrayOfHogs}
      </div>
    )
  }

  // when select value changes
  changeHandler = (e) => {
    this.setState({
      filter: e.target.value
    })
  }

  // clicking on 'filter button' (which has no value so no event.target)
  clickHandler = (e) => {
    let newArr = [...this.props.hogs]
    let annoyingKey = 'weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'

    if (this.state.filter === 'greased') {
      this.setState({
        hogs: newArr.filter( hog => {
          return hog.greased === true
        })
      })
    } else if (this.state.filter === 'name') {
      this.setState({
        hogs: newArr.sort((a, b) => {
          return a.name.localeCompare(b.name)
        })
      })
    } else if (this.state.filter === 'weight') {
      this.setState({
        hogs: newArr.sort((a, b) => {
          return a[annoyingKey] - b[annoyingKey]
        })
      })
    }

  }


}
