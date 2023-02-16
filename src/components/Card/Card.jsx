import React from 'react'
import './Card.css'

function Card({emoji, heading, details}) {
  return (
    <div className="card">
        <img src={emoji} alt="Heart Emoji"/>
        <span>{heading}</span>
        <span>{details}</span>
        <button className="cardButton">Learn More</button>
    </div>
  )
}

export default Card
