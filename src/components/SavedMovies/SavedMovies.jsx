import React from 'react';

import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

import cards from '../../utils/constants';

import './SavedMovies.css';

function SavedMovies() {
    return (
    <section className="saved-movies">
      <SearchForm />
      <MoviesCardList
        cards={cards}
      />
    </section>
  )
}

export default SavedMovies;