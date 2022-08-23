import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useHeroes } from '../../hooks/useHeroes';

export const HeroPage = () => {

  const {heroId} = useParams();
  const {isLoading,getHeroById} = useHeroes();
  
  const hero = getHeroById(parseInt(heroId))

  const navigate = useNavigate()
  const onNavigateBack = () => {
    navigate(-1)
  }
    
  return (
      <div className="row mt-5">
        <div className="col-4 animate__animated animate__fadeInLeft">
        <img
              src={hero.images.lg}
              alt={hero.name}
              className="img-thumbnail"
            />
        </div>
        <div className="col-8">
          <h3>
            {hero.superhero}
          </h3>
          <ul className="list-group list-group-flush p-2">
              <b>Alter ego: </b>
              {hero.biography.alterEgos}
            </ul>
            <ul className="list-group list-group-flush p-2">
              <b>Publishers: </b>
              {hero.biography.publisher}
            </ul>
            <ul className="list-group list-group-flush p-2">
              <b>Fist Appearance: </b>
              {hero.biography.firstAppearance}
            </ul>
            <p>{hero.characters}</p>
          <button
            className='btn btn-outline-primary'
            onClick={onNavigateBack}
          >
            Volver...
          </button>
        </div>
      </div>
  )
}

