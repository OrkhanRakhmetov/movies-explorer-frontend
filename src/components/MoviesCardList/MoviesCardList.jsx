import React from 'react'

import MoviesCard from '../MoviesCard/MoviesCard'

import { useLocation } from 'react-router-dom'
import './MoviesCardList.css'

function MoviesCardList({ cards }) {
  const location = useLocation()

	return (
		<section className='movies-cards'>
			<ul className='movies-cards__items'>
				{cards.map(card => {
					return <MoviesCard key={card.id} card={card} />
				})}
			</ul>
			{location.pathname === '/movies' && (
				<button className='movies-cards__button hover-effect'>Ещё</button>
			)}
      	{location.pathname === '/saved-movies' && (
				<button className='movies-cards__button none-effect'>Ещё</button>
			)}
		</section>
	)
}

export default MoviesCardList