import React from 'react'
import './Card.scss'

function Card(props) {
  return (
    
    <div className='container' >
        <img src={props.src} alt="thing" width="300" height="250" />
        <p>{props.name}</p>
    </div>
  )
}

export default Card