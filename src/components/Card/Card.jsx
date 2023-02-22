import React from 'react'
import './Card.css'

function Card({pic, heading, details}) {
  return (
    <div className="card">
        <img src={pic} alt=""/>
        <span>{heading}</span>
        <span>{details}</span>
    </div>
  )
}

export default Card
