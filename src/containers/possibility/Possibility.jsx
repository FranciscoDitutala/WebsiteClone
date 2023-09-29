import React from 'react';
import './possibility.css'
import possibilityImage from '../../assets/possibility.png'

const Possibility = () => {
  
    return (
      <div className="gpt3__possibility" section__padding>
          <div className="gpt3__possibility-image">
            <img src={possibilityImage} alt="Possibility Image" />
          </div>
          <div className="gpt3__possibility-content">
            <h4>Request Early Access to ^Get Started</h4>
            <h1  className='gradient__text'> The Possibility are beyond your imaginations</h1>
            <p>Yet bed any for the travilling assistance in
            Redundant alt attribute. Screen-readers already announce `img` tags as an image. 
            You don’t need to use the words `image`, `photo,` or 
            `picture` (or any specified custom words) in the alt prop 
               </p>
            <h4>Request Early Access to ^Get Started</h4>
          </div>

      </div> 
    )
  }

export default Possibility