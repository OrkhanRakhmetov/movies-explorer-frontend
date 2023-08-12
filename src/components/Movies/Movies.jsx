import React from 'react';

import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

import cards from '../../utils/constants';

import './Movies.css';

function Movies() {
    return (
    <section className="movies">
      <SearchForm />
      <MoviesCardList
        cards={cards}
      />
    </section>
  )
}

export default Movies;