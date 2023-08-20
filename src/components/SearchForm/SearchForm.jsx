import searchFormButton from '../../images/searchicon.svg';

import styles from './SearchForm.module.scss';

const SearchForm = ({
  isShortVideos,
  onClickButtonSearch,
  onChangeSearch,
  onChangeToggle,
  searchTextInputValue,
  pathname,
}) => {
  return (
    <div className={styles.searchform}>
      <form className={styles.searchform__searching}>
        <div className={styles.searchform__form}>
          <input
            className={styles.searchform__input}
            type="text"
            placeholder="Фильм"
            onChange={onChangeSearch}
            value={searchTextInputValue}
            required
          />
          <button
            className={styles.searchform__button}
            type="submit"
            onClick={(event) => {
              onClickButtonSearch(event);
            }}>
            <img
              className={styles.searchform__buttonimage}
              src={searchFormButton}
              alt="поиск фильмов"
            />
          </button>
        </div>

        <div className={styles.searchform__shortsContainer}>
          <p className={styles.searchform__shortsText}>Короткометражки</p>

          <label className={styles.searchform__shortsButton}>
            <input
              value={isShortVideos}
              checked={isShortVideos}
              type="checkbox"
              onChange={onChangeToggle}
              className={styles.searchform__shortsCheckbox}
            />
            <span className={styles.searchform__shortsSlider} />
          </label>
        </div>
      </form>
    </div>
  );
};

export default SearchForm;
