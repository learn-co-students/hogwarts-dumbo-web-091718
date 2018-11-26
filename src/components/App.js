import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import PigInfo from './PigInfo'
import PigInfoSorter from './PigInfoSorter'

const pigWeight = 'weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'

const DEFAULT_HOGS = hogs 

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      hogs: DEFAULT_HOGS
    }
  }

  // TODO: Refactor
  handleFilter = (e) => {
    e.preventDefault()

    let checkedCheckboxes = []

    for (const checkbox of e.target.elements) {
      if (checkbox.checked === true) {
        checkedCheckboxes.push(checkbox)
      }
    }
    
    for (const checkedCheckbox of checkedCheckboxes) {
      if (checkedCheckbox.name === 'weight') {
        this.setState((prevState) => {
          return {
            hogs: prevState.hogs.sort((a, b) => b["weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water"] - a["weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water"])
          }
        })
      } else if (checkedCheckbox.name === 'name') {
        this.setState((prevState) => {
          return {
            hogs: prevState.hogs.sort((a, b) => (a.name).localeCompare(b.name))
          }
        })
      } else if (checkedCheckbox.name === 'greased') {
        this.setState(prevState => ({ hogs: prevState.hogs.filter(hog => hog.greased) }))
      } 
    }

    if (!checkedCheckboxes.length) {
      this.setState((prevState) => {
        return { hogs: DEFAULT_HOGS }
      })
    }

  }

  render() {
    return (
      <div className="App">
        <Nav />
        <PigInfoSorter handleFilter={this.handleFilter} />
        {
          this.state.hogs.map(
            (hog, i) => 
              <PigInfo
                key={i}
                name={hog.name}
                specialty={hog.specialty}
                greased={hog.greased}
                highestMedalAchieved={hog['highest medal achieved']}
                pic={hog.img}
                weight={hog[pigWeight]}
              />

          )
        }
      </div>
    )
  }
}

export default App;
