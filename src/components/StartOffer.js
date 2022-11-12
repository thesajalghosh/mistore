import React from 'react'
import '../styles/StartOffer.css'

const StartOffer = (props) => {
  return (
    <div className="container">
      <div className="first"></div>
      <div className="text">{props.name}</div>
      <div className="second"></div>
    </div>
  )
}

export default StartOffer
