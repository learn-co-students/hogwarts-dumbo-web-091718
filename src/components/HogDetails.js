import React, { Component } from 'react'
// import Hog from 'prop-types'


export default class HogDetails extends Component {
  render() {
    const {hog} = this.props;
    //console.log(hog);
    
    return (
      <div>
        <div className='ui card'>
          <img src={hog.image} className='ui image' />
          <div className='content'>
          <div className='header'>{hog.name}</div>
          <div className='meta'>
          <span className='date'>{hog.specialty}</span>
          </div>
          <div className='meta'>
          <span className='date'>{hog['highest medal achieved']}</span>
          </div>            
          <div className='description'>{hog['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']}</div>
          </div>
          <div className='extra content'>
            <a>
              <i aria-hidden='true' className='user icon' />
              {hog.greased ? 'Greased' : 'Not Greased'}
            </a>
          </div>
        </div>        
      </div>
    )
  }
}
