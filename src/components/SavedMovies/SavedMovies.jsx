/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect, useRef } from 'react';

import useResize from 'use-resize';

import SearchForm from '../SearchForm';
import MoviesCardList from '../MoviesCardList';
import Preloader from '../Preloader';

import { DURATION_SHORT_FILM } from '../../utils/consts';

import { CYRILLIC_REGEX } from '../../utils/regEx';

import styles from './SavedMovies.module.scss';

const SavedMovies = ({ movies, handleDeleteMovie, isPreloaderVisible, pathname, logedIn }) => {
  const [countFilms, setCountFilms] = useState(0);
  const windowWidth = useResize().width;

  const [searchTextInputValue, setSearchTextInputValue] = useState('');
  const [searchFilmsResult, setSearchFilmsResult] = useState(
    movies.filter((movie) => {
      return movie.duration > DURATION_SHORT_FILM;
    }),
  );
  const [isShortVideos, setIsShortVideos] = useState(false);
  const isMountedSearchFilmsResult = useRef(false);
  const isMountedIsShortVideos = useRef(false);

  useEffect(() => {
    if (windowWidth >= 1280) {
      setCountFilms(12);
    } else if (windowWidth < 1280 && windowWidth >= 768) {
      setCountFilms(8);
    } else {
      setCountFilms(5);
    }
  }, [windowWidth]);

  const etcFilms = () => {
    if (windowWidth >= 1280) {
      setCountFilms(countFilms + 3);
    } else if (windowWidth < 1280 && windowWidth >= 780) {
      setCountFilms(countFilms + 2);
    } else {
      setCountFilms(countFilms + 2);
    }
  };

  useEffect(() => {
    if (isMountedSearchFilmsResult.isMounted) {
      setSearchFilmsResult(
        movies.filter((movie) => {
          return movie.duration > DURATION_SHORT_FILM;
        }),
      );
    } else {
      isMountedSearchFilmsResult.isMounted = true;
    }
  }, []);

  useEffect(() => {
    if (isMountedIsShortVideos.isMounted) {
      setSearchFilmsResult(
        movies.filter((movie) => {
          if (CYRILLIC_REGEX.test(searchTextInputValue)) {
            return isShortVideos
              ? movie.duration <= DURATION_SHORT_FILM &&
                  movie.nameRU.toLowerCase().replaceAll(' ', '').includes(searchTextInputValue)
              : movie.duration > DURATION_SHORT_FILM &&
                  movie.nameRU.toLowerCase().replaceAll(' ', '').includes(searchTextInputValue);
          } else {
            return isShortVideos
              ? movie.duration <= DURATION_SHORT_FILM &&
                  movie.nameEN.toLowerCase().replaceAll(' ', '').includes(searchTextInputValue)
              : movie.duration > DURATION_SHORT_FILM &&
                  movie.nameEN.toLowerCase().replaceAll(' ', '').includes(searchTextInputValue);
          }
        }),
      );
    } else {
      isMountedIsShortVideos.isMounted = true;
    }
  }, [isShortVideos]);

  const onClickButtonSearch = (event) => {
    event.preventDefault();

    setSearchFilmsResult(
      movies.filter((movie) => {
        if (CYRILLIC_REGEX.test(searchTextInputValue)) {
          return isShortVideos
            ? movie.duration <= DURATION_SHORT_FILM &&
                movie.nameRU.toLowerCase().replaceAll(' ', '').includes(searchTextInputValue)
            : movie.duration > DURATION_SHORT_FILM &&
                movie.nameRU.toLowerCase().replaceAll(' ', '').includes(searchTextInputValue);
        } else {
          return isShortVideos
            ? movie.duration <= DURATION_SHORT_FILM &&
                movie.nameEN.toLowerCase().replaceAll(' ', '').includes(searchTextInputValue)
            : movie.duration > DURATION_SHORT_FILM &&
                movie.nameEN.toLowerCase().replaceAll(' ', '').includes(searchTextInputValue);
        }
      }),
    );

    setSearchTextInputValue(searchTextInputValue);
  };

  const onChangeSearch = (event) => {
    setSearchTextInputValue(event.target.value.toLowerCase().replaceAll(' ', ''));
  };

  const onChangeToggle = () => {
    setIsShortVideos(isShortVideos ? false : true);
  };

  return (
    <div className={styles.movies}>
      <SearchForm
        searchTextInputValue={searchTextInputValue}
        isShortVideos={isShortVideos}
        onClickButtonSearch={onClickButtonSearch}
        onChangeToggle={onChangeToggle}
        onChangeSearch={onChangeSearch}
        pathname={pathname}
      />
      {isPreloaderVisible ? (
        <Preloader />
      ) : (
        <MoviesCardList
          etcFilms={etcFilms}
          countFilms={countFilms}
          movies={searchFilmsResult}
          handleDeleteMovie={handleDeleteMovie}
          savedMovies={movies}
        />
      )}
    </div>
  );
};

export default SavedMovies;
