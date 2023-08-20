/* eslint-disable prefer-const */
// import pic from '../../images/avatar.png';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import flaggray from '../../images/flaggray.svg';
import deleteicon from '../../images/deleteicon.svg';
import flagwhite from '../../images/flagwhite.svg';

import styles from './MoviesCard.module.scss';

const MoviesCard = ({ movieInfo, handleCreateMovie, handleDeleteMovie, savedMovies }) => {
  const locationMovies = useLocation().pathname === '/saved-movies';

  let { country, director, duration, year, description, image, trailerLink, nameRU, nameEN, id } =
    movieInfo;

  if (locationMovies) {
    id = movieInfo.movieId;
  }

  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    setIsFavorite(savedMovies.some((savedMovie) => savedMovie.movieId === id));
  }, [savedMovies, id]);

  const secToTime = (duration) => {
    const hours = Math.floor(duration / 60);
    const min = Math.floor(duration % 60);
    return `${hours}ч ${min}м`;
  };

  const handleClickFavorite = (event) => {
    isFavorite
      ? handleDeleteMovie(id)
      : handleCreateMovie({
          country,
          director,
          duration,
          year,
          description,
          image: `https://api.nomoreparties.co/${image.url}`,
          trailerLink,
          thumbnail: `https://api.nomoreparties.co/${image.url}`,
          nameRU,
          nameEN,
          movieId: id,
        });
  };

  return locationMovies ? (
    isFavorite && (
      <a className={styles.card} href={trailerLink} target="__blank">
        <div className={styles.card__top}>
          <div className={styles.card__left}>
            <h2 className={styles.card__name}>{nameRU}</h2>
            <p className={styles.card__duration}>{secToTime(duration)}</p>
          </div>

          <button
            onClick={handleClickFavorite}
            className={`${styles.card__right} ${isFavorite && styles.card__right_active}`}
            type="button">
            <img
              className={`${styles.card__favorite}`}
              alt="добавить в избранное"
              src={isFavorite ? deleteicon : flaggray}></img>
          </button>
        </div>

        <div className={styles.card__bottom}>
          <img
            className={styles.card__image}
            src={locationMovies ? image : `https://api.nomoreparties.co/${image.url}`}
            alt={description.slice(0, 30)}></img>
        </div>
      </a>
    )
  ) : (
    <a className={styles.card} href={trailerLink} target="__blank">
      <div className={styles.card__top}>
        <div className={styles.card__left}>
          <h2 className={styles.card__name}>{nameRU}</h2>
          <p className={styles.card__duration}>{secToTime(duration)}</p>
        </div>

        <button
          onClick={handleClickFavorite}
          className={`${styles.card__right} ${isFavorite && styles.card__right_active}`}
          type="button">
          <img
            className={`${styles.card__favorite}`}
            alt="добавить в избранное"
            src={isFavorite ? flagwhite : flaggray}></img>
        </button>
      </div>

      <div className={styles.card__bottom}>
        <img
          className={styles.card__image}
          src={locationMovies ? image : `https://api.nomoreparties.co/${image.url}`}
          alt={description.slice(0, 30)}></img>
      </div>
    </a>
  );
};

export default MoviesCard;
