import { useState, useEffect, useRef } from 'react';

import useResize from 'use-resize';

import SearchForm from '../SearchForm';
import MoviesCardList from '../MoviesCardList';
import Preloader from '../Preloader';

import { DURATION_SHORT_FILM } from '../../utils/consts';

import { CYRILLIC_REGEX } from '../../utils/regEx';

import {
  COMP_SCREEN_WIDTH,
  TABLET_SCREEN_WIDTH,
  COMP_COUNT_FILMS,
  TABLET_COUNT_FILMS,
  MOBILE_COUNT_FILMS,
  COMP_ETC_COUNT_FILMS,
  MOBILE_ETC_COUNT_FILMS,
} from '../../utils/consts';

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
