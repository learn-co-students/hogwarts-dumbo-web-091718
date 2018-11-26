import React from 'react'

const PigInfoSorter = (props) => {
  return (
    <div>
      <form onSubmit={props.handleFilter}>
        <h1>How do you want to sort the pigs?</h1>
        <div>
          <label htmlFor="weight">Weight? </label>
          <input type="checkbox" name="weight" />
        </div>

        <div>
          <label htmlFor="name">Name? </label>
          <input type="checkbox" name="name" />
        </div>

        <div>
          <label htmlFor="greased">Greased? </label>
          <input type="checkbox" name="greased" />
        </div>

        <button>Submit</button>
      </form>
    </div>
  ) 
}

export default PigInfoSorter