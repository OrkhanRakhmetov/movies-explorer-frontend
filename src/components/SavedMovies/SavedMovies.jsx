import { useState, useEffect } from 'react';

import useResize from 'use-resize';

import SearchForm from '../SearchForm';
import MoviesCardList from '../MoviesCardList';
import Preloader from '../Preloader';

import styles from './SavedMovies.module.scss';

const SavedMovies = ({ movies }) => {
  const [preloader, setPreloader] = useState(false);
  const [countFilms, setCountFilms] = useState(0);
  const windowWidth = useResize().width;

  useEffect(() => {
    if (windowWidth >= 1280) {
      setCountFilms(12);
    } else if (windowWidth < 1280 && windowWidth >= 768) {
      setCountFilms(8);
    } else {
      setCountFilms(5);
    }
  }, [windowWidth]);

  useEffect(() => {
    setTimeout(() => {
      setPreloader(true);
    }, 0);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setPreloader(false);
    }, 4000);
  }, []);

  const etcFilms = () => {
    if (windowWidth >= 1280) {
      setCountFilms(countFilms + 3);
    } else if (windowWidth < 1280 && windowWidth >= 768) {
      setCountFilms(countFilms + 2);
    } else {
      setCountFilms(countFilms + 1);
    }
  };

  return (
    <div className={styles.movies}>
      <SearchForm />
      {preloader ? (
        <Preloader />
      ) : (
        <MoviesCardList etcFilms={etcFilms} countFilms={countFilms} movies={movies} />
      )}
    </div>
  );
};

export default SavedMovies;
