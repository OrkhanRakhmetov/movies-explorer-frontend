import { useState, useEffect } from 'react';

import searchFormButton from '../../images/searchicon.svg';

import styles from './SearchForm.module.scss';

const SearchForm = () => {
  const [searchValue, setSearchValue] = useState('');
  const [isShortVideos, setIsShortVideos] = useState(false);

  useEffect(() => {
    console.log(searchValue);
  }, [searchValue]);

  const onChangeSearch = (event) => {
    setSearchValue(event.target.value);
  };

  const onChangeToggle = (event) => {
    setIsShortVideos(!isShortVideos);
    console.log(isShortVideos);
  };

  const onClickButtonSearch = (event) => {
    event.preventDefault();
    console.log(searchValue);
  };

  return (
    <div className={styles.searchform}>
      <form className={styles.searchform__searching}>
        <div className={styles.searchform__form}>
          <input
            className={styles.searchform__input}
            type="text"
            placeholder="Фильм"
            onChange={onChangeSearch}
            value={searchValue}
            required
          />
          <button className={styles.searchform__button} type="submit" onClick={onClickButtonSearch}>
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
              type="checkbox"
              onChange={onChangeToggle}
              defaultChecked={false}
              className={styles.searchform__shortsCheckbox}
            />
            <span className={styles.searchform__shortsSlider} />
          </label>
        </div>
      </form>

      {/* <div className={styles.searchform__dividingLine}></div> */}
    </div>
  );
};

export default SearchForm;
