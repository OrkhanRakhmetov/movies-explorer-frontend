import { Link, useNavigate } from 'react-router-dom';

import { useState, useEffect } from 'react';

import logo from '../../images/logomain.svg';

import { mailTester, passwordTester } from '../../utils/regEx';

import styles from './Register.module.scss';

const Register = ({ isLogedIn, handleRegisterUser }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (isLogedIn) {
      navigate('/movies', { replace: true });
    }
  }, []);

  const [userName, setUserName] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [isErrorUserPassword, setIsErrorUserPassword] = useState(true);
  const [isErrorUserName, setIsErrorUserName] = useState(true);
  const [isErrorUserEmail, setIsErrorUserEmail] = useState(true);
  const [errorUserPassword, setErrorUserPassword] = useState('Вы не ввели пароль');
  const [errorUserName, setErrorUserName] = useState('Вы не ввели имя');
  const [errorUserEmail, setErrorUserEmail] = useState('Вы не ввели почту');

  const [isButtonDisbled, setIsButtonDisbled] = useState(true);

  useEffect(() => {
    if (!isErrorUserPassword && !isErrorUserName && !isErrorUserEmail) {
      setIsButtonDisbled(false);
    } else {
      setIsButtonDisbled(true);
    }
  }, [userPassword, userEmail, userName]);

  const onChangeEmail = (event) => {
    setUserEmail(event.target.value);

    if (event.target.value.length === 0) {
      setIsErrorUserEmail(true);
      setErrorUserEmail('Вы не ввели почту');
    } else if (event.target.value.length < 6 || event.target.value.length > 40) {
      setIsErrorUserEmail(true);
      setErrorUserEmail('Длина почты должна быть от 6 до 40 символов');
    } else if (!mailTester.test(String(event.target.value).toLowerCase())) {
      setIsErrorUserEmail(true);
      setErrorUserEmail('Почта не подходит под требования');
    } else {
      setIsErrorUserEmail(false);
      setErrorUserEmail('');
    }
  };

  const onChangePassword = (event) => {
    setUserPassword(event.target.value);

    if (event.target.value.length === 0) {
      setIsErrorUserPassword(true);
      setErrorUserPassword('Вы не ввели пароль');
    } else if (event.target.value.length < 8 || event.target.value.length > 40) {
      setIsErrorUserPassword(true);
      setErrorUserPassword('Длина пароля должна быть от 8 до 40 символов');
    } else if (!passwordTester.test(String(event.target.value).toLowerCase())) {
      setIsErrorUserPassword(true);
      setErrorUserPassword(
        'Пароль не подходит под требования (всего восемь символов - минимум 1 буква, 1 цифра и один из символов "!#$%&?")',
      );
    } else {
      setIsErrorUserPassword(false);
      setErrorUserPassword('');
    }
  };

  const onChangeName = (event) => {
    setUserName(event.target.value);

    if (event.target.value.length === 0) {
      setIsErrorUserName(true);
      setErrorUserName('Вы не ввели Имя');
    } else if (event.target.value.length < 2 || event.target.value.length > 40) {
      setIsErrorUserName(true);
      setErrorUserName('Длина имени должна быть от 2 до 40 символов');
    } else {
      setIsErrorUserName(false);
      setErrorUserName('');
    }
  };

  const onSignUp = (event) => {
    event.preventDefault();
    console.log({ email: userEmail, password: userPassword, name: userName });
    handleRegisterUser({ email: userEmail, password: userPassword, name: userName });
  };

  useEffect(() => {
    setIsButtonDisbled(true);
  }, []);

  return (
    <section className={styles.register}>
      <div className={`${styles.register__top}`}>
        <Link to="/">
          <img src={logo} alt="Логотип сайта" className={logo} />
        </Link>
        <h1 className={styles.register__header}>Добро пожаловать!</h1>
      </div>

      <form className={`${styles.register__form}`}>
        <div className={styles.register__inputs}>
          <div className={styles.inputElement}>
            <label className={styles.inputElement__label} htmlFor="text">
              Имя
            </label>
            <input
              name="text"
              type="text"
              className={`${styles.inputElement__input} ${styles.inputElement__input_name}`}
              placeholder="Имя"
              value={userName}
              autoComplete="off"
              onChange={onChangeName}
              required></input>
            <span
              className={`${styles.inputElement__inputError} ${
                isErrorUserName && styles.inputElement__inputError_active
              }`}>
              {errorUserName}
            </span>
          </div>

          <div className={styles.inputElement}>
            <label className={styles.inputElement__label} htmlFor="email">
              E-mail
            </label>
            <input
              name="email"
              type="email"
              className={`${styles.inputElement__input} ${styles.inputElement__input_email}`}
              value={userEmail}
              autoComplete="off"
              placeholder="pochta@yandex.ru"
              onChange={onChangeEmail}
              required></input>
            <span
              className={`${styles.inputElement__inputError} ${
                isErrorUserEmail && styles.inputElement__inputError_active
              }`}>
              {errorUserEmail}
            </span>
          </div>

          <div className={styles.inputElement}>
            <label className={styles.inputElement__label} htmlFor="password">
              Пароль
            </label>
            <input
              name="password"
              type="password"
              value={userPassword}
              className={`${styles.inputElement__input} ${styles.inputElement__input_password}`}
              placeholder="Введите пароль"
              autoComplete="off"
              onChange={onChangePassword}
              required></input>
            <span
              className={`${styles.inputElement__inputError} ${
                isErrorUserPassword && styles.inputElement__inputError_active
              }`}>
              {errorUserPassword}
            </span>
          </div>
        </div>

        <div className={styles.register__buttons}>
          <button
            type="button"
            onClick={onSignUp}
            className={`${styles.register__button} ${
              isButtonDisbled && styles.register__button_disabled
            }`}
            disabled={isButtonDisbled}>
            Зарегистрироваться
          </button>

          <p className={`${styles.register__buttonEntry}`}>
            Уже зарегистрированы?
            <Link to="/signin" className={`${styles.register__buttonLink}`}>
              Войти
            </Link>
          </p>
        </div>
      </form>
    </section>
  );
};

export default Register;
