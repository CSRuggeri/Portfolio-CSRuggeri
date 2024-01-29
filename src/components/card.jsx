import React from 'react'
import "./Card.css"
export const Card = ({ project }) => {
  const { name, description, url, image } = project;
  return (
    <div>
    <div className='cardCont'>
      <h2 className='title'>{name}</h2>
      <p className='description'>{description}</p>
      <a href={url} target="_blank" rel="noopener noreferrer">
        Visit Project
      </a>
      <img className='image' src={image} alt={name} />
    </div></div>
  )
}
