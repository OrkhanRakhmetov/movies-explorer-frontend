import React from 'react'

import { useLocation } from 'react-router-dom'
import './MoviesCard.css'

function MoviesCard({ card }) {
	const location = useLocation()

	const moviesDuration = min => {
		const hours = Math.trunc(min / 60)
		const minutes = min % 60
		return hours + 'ч ' + minutes + 'м'
	}

	return (
		<li className='moviescard'>
			<img className='moviescard__img' src={card.image} alt={card.nameRU} />
			<div className='moviescard__info'>
				<a className='moviescard__link hover-effect' href={card.trailerLink}>
					{card.nameRU}
				</a>
				{location.pathname === '/movies' && (
					<button className='moviescard__like hover-effect' />
				)}

				{location.pathname === '/saved-movies' && (
					<button className='moviescard__delete hover-effect' />
				)}
			</div>
			<span className='moviescard__duration'>
				{moviesDuration(card.duration)}
			</span>
		</li>
	)
}

export default MoviesCard