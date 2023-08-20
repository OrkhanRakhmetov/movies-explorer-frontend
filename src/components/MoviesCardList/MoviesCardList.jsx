import MoviesCard from '../MoviesCard';

import styles from './MoviesCardList.module.scss';

const MoviesCardList = ({ etcFilms, countFilms, movies }) => {
  return (
    <div className={styles.movies}>
      <div className={styles.movies__cardlist}>
        {movies
          .slice(0, countFilms)
          .map((movie) => movie && <MoviesCard movieInfo={movie} key={movie._id} />)}
      </div>

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
    </div>
  );
};

export default MoviesCardList;
