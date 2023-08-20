// import pic from '../../images/avatar.png';
import flaggray from '../../images/flaggray.svg';
import flagwhite from '../../images/flagwhite.svg';
import deleteicon from '../../images/deleteicon.svg';

import styles from './MoviesCard.module.scss';

const MoviesCard = ({ movieInfo }) => {
  const {
    country,
    director,
    duration,
    year,
    description,
    image,
    trailerLink,
    thumbnail,
    nameRU,
    nameEN,
    _id,
  } = movieInfo;

  const secToTime = (duration) => {
    const hours = Math.floor(duration / 60);
    const min = Math.floor(duration % 60);
    return `${hours}ч ${min}м`;
  };

  return (
    <div className={styles.card}>
      <div className={styles.card__top}>
        <div className={styles.card__left}>
          <h2 className={styles.card__name}>{nameRU}</h2>
          <p className={styles.card__duration}>{secToTime(duration)}</p>
        </div>

        <button className={`${styles.card__right}`} type="button">
          <img
            className={`${styles.card__favorite}`}
            alt="добавить в избранное"
            src={flaggray}></img>
        </button>
      </div>

      <div className={styles.card__bottom}>
        <img className={styles.card__image} src={image} alt={description}></img>
      </div>
    </div>
  );
};

export default MoviesCard;
