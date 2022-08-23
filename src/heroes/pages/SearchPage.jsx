import React, { useMemo } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import queryString from 'query-string';
import { HeroCard } from "../components/HeroCard";
import { useHeroes } from "../../hooks/useHeroes";

import "../../../src/styles.css";

export const SearchPage = () => {

  const navigate = useNavigate();
  const location = useLocation();
  const {getHeroByName} = useHeroes();

  const {q = ''} = queryString.parse( location.search );

  const heroes = useMemo(() => getHeroByName(q), [q])

  const {searchText, onInputChange } = useForm({
    searchText: q
  })
  
  const onSearchSubmit = (event) => {
      event.preventDefault();
      if( searchText.trim().length <= 1 ) return;     
      navigate(`?q=${searchText}`);    
  }
  
  return (
    <>
      <div className="d-grid gap-3">
        <h1 className=" mt-4">Buscar</h1>
        <hr />
        <div className="row alignsearching">
          <div className="col-5 search">
            <h4 className=" mb-2">Busqueda</h4>
            <hr />
            <form className="mt-2"
              onSubmit={onSearchSubmit} value={searchText}
            >
              <input
                type="text"
                placeholder="Busca tu superheroe"
                className="form-control"
                name="searchText"
                autoComplete="off"
                value={searchText}
                onChange={onInputChange}
              />
              <button className="btn btn-outline-primary mt-3"> Buscar </button>
            </form>          
          </div>

          <div className="col-7 gap-1 results">
            <h4  className=" mb-2 ">Resultados</h4>
            <hr/>

            <div 
              className="alert alert-primary mt-2 "
              style={{display: q === '' ? '': 'none'}}          
            >
              Buscar superheroe
            </div>

            {
              !heroes.length && q !== '' && (
                <div className="alert alert-danger">
                  No se encontro ningún superheroe <b> { q } </b>
                </div>  
              )
            }        

            {
              heroes.map(hero => (
                <HeroCard key={hero.id} {...hero} />
              ))
            }
                  
          </div>
        </div>

      </div>
    </>
  );
};

