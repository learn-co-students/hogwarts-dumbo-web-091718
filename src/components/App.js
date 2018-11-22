import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
console.log(hogs)

class App extends Component {
  render() {
    return (
      <div className="App">
          < Nav />

      </div>
    )
  }
}

export default App;
