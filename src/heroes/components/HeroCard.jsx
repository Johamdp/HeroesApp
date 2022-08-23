import React from 'react'
import { Link } from 'react-router-dom';

import '../components/styles/HeroCard.css'

export const HeroCard = ({
    id,
    name,
    biography,
    powerstats,
    images
}) => {
 
  
 
  return (
    <div className='col animate__animated animate__fadeIn'>
      <div className='card mt-2'>
        <div className="d-flex imgrespsection">
          <div className="col-6 imgrespcontainer">
              <img 
                className='card-img' 
                src={images.sm} 
                alt={name} 
              />
          </div>
          <div className="col-6 imgrespcontainer">
            <div className='card-body'>
              <h5 className='card-title'>{name}</h5>
              <p className='card-text text-secondary'>{biography.fullName}</p>
              <li>                
                <p>Combate: {powerstats.combat}</p>
                <p>Durabilidad: {powerstats.durability}</p>
                <p>Inteligencia: {powerstats.intelligence}</p>
                <p>Poder: {powerstats.power}</p>
                <p>Velocidad: {powerstats.speed}</p>
                <p>Fuerza: {powerstats.strength}</p>
              </li>

              <p className='card-text'>
                  <small className='text-muted'>
                      {biography.firstAppearance}
                  </small>
              </p>

              <Link to={`/hero/${id}`}>
                  Mas info...
              </Link>

            </div>
            </div>
        </div>
      </div>
    </div>
  )
}

