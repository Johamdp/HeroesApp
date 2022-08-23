import React from 'react'
import '../../heroes/components/styles/HeroList.css';

export const Pagination = ({page, increment, decrement, lastPage}) => {

    const prevPage = () => {
        if(page>1){
            decrement()
        }
    }

    const nextPage = () => {
        if(page<lastPage){
            increment()
        }
    }

  return (
    <>
        <div className="pagination_container">
            <button 
              className={page === 1 ? 'disable' : ''} 
              onClick={prevPage}
            > 
              Anterior 
            </button>
            <div className="page">Pagina <span className='page_color'>{page} de {lastPage}</span></div>
            <button 
              className={page === lastPage ? 'disable' : ''} 
              onClick={nextPage}
            > 
              Siguiente
            </button>
        </div>
    </>
  )
}
