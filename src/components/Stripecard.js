import React from 'react'
import '../styles/Stripecard.css';


const Stripecard = (props) => {
  return (
    <>

    <div className="text">
    
    <div className="heading">
     
      {props.above}</div>
      <div className="tagline">
      {props.below}</div>
    </div>
      
    </>
  )
}

export default Stripecard
