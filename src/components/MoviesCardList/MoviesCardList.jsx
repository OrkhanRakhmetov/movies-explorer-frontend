import React from 'react'

import MoviesCard from '../MoviesCard/MoviesCard'

import './MoviesCardList.css'

function MoviesCardList({ cards }) {
  return (
    <section className="movies-cards">
      <ul className="movies-cards__items">
        {cards.map(card => {
          return (
            <MoviesCard
              key={card.id}
              card={card}
            />
          )
        })}
      </ul>
      <button className="movies-cards__button hover-effect">Ещё</button>
    </section>
  )
};

export default MoviesCardList;