import React from 'react'
import './Card.scss'
const Card = (props) => {
  return (
    <div className="projects__block__card">
      <div>
      <img src={props.img} alt="" />
        <h3>{props.h3}</h3>
        <h4>Sahifalar soni: {props.h4}</h4>
        <p>Texnologiya: {props.p}</p>
        <a href={props.a} target='true'>Loyihani ko'rish</a>
      </div>
    </div>
  )
}

export default Card