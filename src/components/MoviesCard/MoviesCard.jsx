import React from 'react'

import './MoviesCard.css'

function MoviesCard({ card }) {

  const moviesDuration = (min) => {
    const hours = Math.trunc(min / 60);
    const minutes = min % 60;
    return hours + 'ч ' + minutes + 'м';
  }

  return (
    <li className="moviescard">
      <img
        className="moviescard__img"
        src={card.image}
        alt={card.nameRU}
      />
      <div className="moviescard__info">
        <a
          className="moviescard__link hover-effect"
          href={card.trailerLink}>
          {card.nameRU}
        </a>
        <button className="moviescard__like hover-effect" />
      </div>
      <span className="moviescard__duration">{moviesDuration(card.duration)}</span>
    </li>
  )
};

export default MoviesCard;