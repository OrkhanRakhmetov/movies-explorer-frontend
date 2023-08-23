import { useState, useEffect } from 'react';
import React from 'react';

import { mailTester } from '../../utils/regEx';

import { CurrentUserContext } from '../../contexts/CurrentUserContext';

import closeIconWhite from '../../images/icon-close_white.svg';

import styles from './Profile.module.scss';

const Profile = ({
  handleUpdateUser,
  handleLogOut,
  logedIn,
}) => {
  const [isPopupOpened, setIsPopupOpened] = useState(false);
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [isErrorUserName, setIsErrorUserName] = useState(false);
  const [isErrorUserEmail, setIsErrorUserEmail] = useState(false);
  const [errorUserName, setErrorUserName] = useState('');
  const [errorUserEmail, setErrorUserEmail] = useState('');

  const context = React.useContext(CurrentUserContext);

  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  useEffect(() => {
    setUserName(context.name);
    setUserEmail(context.email);
  }, []);

  useEffect(() => {
    setIsButtonDisabled(true);
  }, []);

  useEffect(() => {
    if (!isErrorUserName && !isErrorUserEmail) {
      setIsButtonDisabled(false);
    } else {
      setIsButtonDisabled(true);
    }
  }, [isErrorUserName, isErrorUserEmail]);

  useEffect(() => {
    if (context.name === userName && context.email === userEmail) {
      setIsButtonDisabled(true);
    } else if (!isErrorUserName && !isErrorUserEmail) {
      setIsButtonDisabled(false);
    }
  }, [userName, userEmail, context.name, context.email]);

  const onChangeName = (event) => {
    setUserName(event.target.value);

    if (event.target.value.length === 0) {
      setErrorUserName('Вы не заполнили поле имени');
      setIsErrorUserName(true);
    } else if (event.target.value.length < 2 || event.target.value.length > 40) {
      setErrorUserName('Имя пользователя должно быть от 2 до 40 символов');
      setIsErrorUserName(true);
    } else {
      setErrorUserName('');
      setIsErrorUserName(false);
    }
  };

  const onChangeEmail = (event) => {
    setUserEmail(event.target.value);
    if (event.target.value.length === 0) {
      setErrorUserEmail('Вы не заполнили поле почты');
      setIsErrorUserEmail(true);
    } else if (event.target.value.length < 6 || event.target.value.length > 40) {
      setErrorUserEmail('Почта пользователя должно быть от 6 до 40 символов');
      setIsErrorUserEmail(true);
    } else if (!mailTester.test(String(event.target.value).toLowerCase())) {
      setErrorUserEmail('Почта пользователя записана неверно');
      setIsErrorUserEmail(true);
    } else {
      setErrorUserEmail('');
      setIsErrorUserEmail(false);
    }
  };

  const onSaveChanges = () => {
    handleUpdateUser({ name: userName, email: userEmail });
    onEditClick();
  };

  const onEditClick = () => {
    setIsPopupOpened(!isPopupOpened);
    setUserName(context.name);
    setUserEmail(context.email);

    setIsErrorUserEmail(false);
    setErrorUserEmail('');
    setErrorUserName('');
    setIsErrorUserName(false);
  };

  const signout = () => {
    handleLogOut();
  };

  return (
    <div className={styles.profile}>
      <h1 className={styles.profile__header}>Привет, {context.name}!</h1>
      <div className={styles.profile__info}>
        <div className={`${styles.profile__blockinfo} ${styles.profile__blockinfo_top}`}>
          <p className={`${styles.profile__text} ${styles.profile__tophead}`}>Имя</p>
          <p className={`${styles.profile__text} ${styles.profile__topvalue}`}>{context.name}</p>
        </div>

        <div className={`${styles.profile__blockinfo} ${styles.profile__blockinfo_bottom}`}>
          <p className={`${styles.profile__text} ${styles.profile__bottomhead}`}>E-mail</p>
          <p className={`${styles.profile__text} ${styles.profile__bottomvalue}`}>
            {context.email}
          </p>
        </div>
      </div>

      <div className={styles.profile__buttons}>
        <button
          onClick={onEditClick}
          type="button"
          className={`${styles.profile__button} ${styles.profile__buttonEdit}`}>
          Редактировать
        </button>

        <button
          onClick={signout}
          className={`${styles.profile__button} ${styles.profile__buttonExit}`}>
          Выйти из аккаунта
        </button>
      </div>

      <div className={`${styles.popup} ${isPopupOpened && styles.popup_opened}`}>
        <div className={`${styles.popup__container}`}>
          <img
            onClick={onEditClick}
            className={styles.popup__close}
            src={closeIconWhite}
            alt="закрыть попап"></img>
          <h2 className={styles.popup__header}>Внести изменения в профиль</h2>

          <div className={styles.popup__inputs}>
            <div className={styles.popup__inputContainer}>
              <label className={styles.popup__label} htmlFor="userName">
                Имя
              </label>
              <input
                type="text"
                name="userName"
                className={`${styles.popup__input} ${styles.popup__input_name}`}
                placeholder="Введите новое имя"
                value={userName}
                onChange={onChangeName}
                required
                autoComplete="off"></input>
              <span
                className={`${styles.popup__inputError} ${
                  isErrorUserName && styles.popup__inputError_active
                }`}>
                {errorUserName}
              </span>
            </div>

            <div className={styles.popup__inputContainer}>
              <label className={styles.popup__label} htmlFor="userEmail">
                Email
              </label>
              <input
                type="email"
                name="userEmail"
                className={`${styles.popup__input} ${styles.popup__input_mail}`}
                placeholder="Введите новую почту"
                value={userEmail}
                onChange={onChangeEmail}
                required
                autoComplete="off"></input>
              <span
                className={`${styles.popup__inputError} ${
                  isErrorUserEmail && styles.popup__inputError_active
                }`}>
                {errorUserEmail}
              </span>
            </div>
          </div>

          <div className={styles.popup__buttons}>
            <button
              onClick={onSaveChanges}
              className={`${styles.popup__button} ${styles.popup__buttonSave} ${
                isButtonDisabled && styles.popup__buttonSave_disabled
              }`}
              disabled={isButtonDisabled}>
              Сохранить
            </button>

            <button
              onClick={onEditClick}
              className={`${styles.popup__button} ${styles.popup__buttonClose}`}>
              Закрыть без изменений
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
