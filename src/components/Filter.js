import React from 'react'

export default class Filters extends React.Component {

  render() {
    return (
      <div className='ui form'>
        <h2>Sort By</h2>
        <div className='field'>
          <select name='type' id='type' onChange={this.props.onChange}>
            <option value='all'>All</option>
            <option value='name'>Name</option>
            <option value='weight'>Weight</option>
            <option value='greased'>Greased</option>
          </select>
        </div>

        <div className="field">
          <button className="ui secondary button" onClick={this.props.onClick}>Filter</button>
        </div>
      </div>
    )
  }

}
