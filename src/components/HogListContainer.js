import React, { Component } from 'react';
import HogDetails from './HogDetails';
import getImage from './getImages';

export default class HogListContainer extends Component {
  constructor(){
    super()
    this.state = {

    }
  }

  showDetails = (hog, imageSrc) => {
    hog.image = imageSrc
      this.setState({
        hog
      });
  }

  render() {
     const {hogs} = this.props;
     const mappedHogs = hogs.map((hog, index) => {
      const imageSrc = getImage(hog);
      return (
            <div onClick={() => this.showDetails(hog, imageSrc)} key={index} className='ui card'>
              <img src={imageSrc} className='ui image' />
              <div className='content'>
             <div className='header'>{hog.name}</div>
              </div>
            </div>  
            )
     });

    const {hog} = this.state;

    return (
      <div className="ui grid container">
        <div className="ui eight wide column">{mappedHogs}</div> 
        <div className="ui eight wide column"> {hog && <HogDetails hog={hog} />} </div> 
      </div>
    )
  }
}
