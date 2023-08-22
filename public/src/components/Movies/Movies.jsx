import { useState, useEffect } from 'react';

import useResize from 'use-resize';

import SearchForm from '../SearchForm';
import MoviesCardList from '../MoviesCardList';
import Preloader from '../Preloader';

import {
  COMP_SCREEN_WIDTH,
  TABLET_SCREEN_WIDTH,
  COMP_COUNT_FILMS,
  TABLET_COUNT_FILMS,
  MOBILE_COUNT_FILMS,
  COMP_ETC_COUNT_FILMS,
  MOBILE_ETC_COUNT_FILMS,
} from '../../utils/consts';

import styles from './Movies.module.scss';

const Movies = ({
  handleCreateMovie,
  handleDeleteMovie,
  savedMovies,
  isPreloaderVisible,
  searchTextInputValue,
  setSearchTextInputValue,
  searchFilmsResult,
  isShortVideos,
  onChangeToggle,
  onClickButtonSearch,
  logedIn,
}) => {
  const [countFilms, setCountFilms] = useState(0);
  const windowWidth = useResize().width;

  useEffect(() => {
    if (windowWidth >= COMP_SCREEN_WIDTH) {
      setCountFilms(COMP_COUNT_FILMS);
    } else if (windowWidth < COMP_SCREEN_WIDTH && windowWidth >= TABLET_SCREEN_WIDTH) {
      setCountFilms(TABLET_COUNT_FILMS);
    } else {
      setCountFilms(MOBILE_COUNT_FILMS);
    }
  }, [windowWidth]);

  const etcFilms = () => {
    if (windowWidth >= COMP_SCREEN_WIDTH) {
      setCountFilms(countFilms + COMP_ETC_COUNT_FILMS);
    } else if (windowWidth < COMP_SCREEN_WIDTH && windowWidth >= TABLET_SCREEN_WIDTH) {
      setCountFilms(countFilms + MOBILE_ETC_COUNT_FILMS);
    } else {
      setCountFilms(countFilms + MOBILE_ETC_COUNT_FILMS);
    }
  };

  useEffect(() => {
    localStorage.setItem('searchFilmsResult', JSON.stringify(searchFilmsResult));
  }, [searchFilmsResult]);

  const onChangeSearch = (event) => {
    setSearchTextInputValue(event.target.value);
  };

  return (
    <div className={styles.movies}>
      <SearchForm
        isShortVideos={isShortVideos}
        onClickButtonSearch={onClickButtonSearch}
        onChangeToggle={onChangeToggle}
        onChangeSearch={onChangeSearch}
        searchTextInputValue={searchTextInputValue}
      />
      {isPreloaderVisible ? (
        <Preloader />
      ) : (
        <MoviesCardList
          etcFilms={etcFilms}
          countFilms={countFilms}
          movies={searchFilmsResult ?? JSON.parse(localStorage.getItem('searchFilmsResult'))}
          handleCreateMovie={handleCreateMovie}
          handleDeleteMovie={handleDeleteMovie}
          savedMovies={savedMovies}
        />
      )}
    </div>
  );
};

export default Movies;
