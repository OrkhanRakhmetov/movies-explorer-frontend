import { useLocation } from 'react-router-dom';

import MoviesCard from '../MoviesCard';

import styles from './MoviesCardList.module.scss';

const MoviesCardList = ({
  etcFilms,
  countFilms,
  movies,
  handleCreateMovie,
  handleDeleteMovie,
  savedMovies,
}) => {
  const locationMovies = useLocation().pathname === '/movies';

  return (
    <div className={styles.movies}>
      {locationMovies && movies.length === 0 && (
        <h2 className={styles.movies__none}>{`${'Ничего не найдено'}`}</h2>
      )}

      {!locationMovies && movies.length === 0 && (
        <h2 className={styles.movies__none}>{`${'Сохраненные фильмы по запросу не найдены'}`}</h2>
      )}

      <div className={styles.movies__cardlist}>
        {movies
          .slice(0, countFilms)
          .map(
            (movie) =>
              movie && (
                <MoviesCard
                  movieInfo={movie}
                  key={locationMovies ? movie.id : movie.movieId}
                  handleCreateMovie={handleCreateMovie}
                  handleDeleteMovie={handleDeleteMovie}
                  savedMovies={savedMovies}
                />
              ),
          )}
      </div>
      {locationMovies && (
        <div className={styles.movies__etc}>
          <button
            type="button"
            onClick={etcFilms}
            className={`${styles.movies__textetc} ${
              countFilms < movies.length && styles.movies__textetc_active
            }`}>
            Ещё
          </button>
        </div>
      )}
    </div>
  );
};

export default MoviesCardList;
