import React, { useEffect } from 'react';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';

import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { CYRILLIC_REGEX } from '../../utils/regEx';
import {
  loginUser,
  createUser,
  getUserInfo,
  updateUser,
  createMovie,
  getMovies,
  deleteMovie,
} from '../../utils/MainApi';

import { getAllMovies } from '../../utils/MoviesApi';

import Header from '../Header';
import Footer from '../Footer';
import Main from '../Main';
import InfoToolTip from '../InfoToolTip';
import Movies from '../Movies';
import SavedMovies from '../SavedMovies';
import Register from '../Register';
import Login from '../Login';
import Profile from '../Profile';
import NotFound from '../NotFound';
import LoadingAnimation from '../LoadingAnimation';

import ProtectedRoute from '../ProtectedRoute';

import { DURATION_SHORT_FILM } from '../../utils/consts';

import styles from './App.module.scss';

function App() {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const [isInfoToolTipVisible, setIsInfoToolTipVisible] = React.useState(false);
  const [infoMessage, setInfoMessage] = React.useState('');
  const [isLoadingVisible, setIsLoadingVisible] = React.useState(false);
  const [isPreloaderVisible, setIsPreloaderVisible] = React.useState(false);

  const [logedIn, setLogedIn] = React.useState(false);
  const [userInfo, setUserInfo] = React.useState({ id: '', email: '', name: '' });

  const [savedMovies, setSavedMovies] = React.useState([]);
  const [allMovies, setAllMovies] = React.useState([]);

  const [searchTextInputValue, setSearchTextInputValue] = React.useState(
    JSON.parse(localStorage.getItem('searchTextInputValue')) ?? '',
  );

  const [searchFilmsResult, setSearchFilmsResult] = React.useState(
    JSON.parse(localStorage.getItem('searchFilmsResult')) ?? [],
  );

  const [isShortVideos, setIsShortVideos] = React.useState(
    JSON.parse(localStorage.getItem('isShortVideos') ?? false),
  );

  const onChangeToggle = () => {
    setIsShortVideos((prevState) => !prevState);

    const searchTextModified = searchTextInputValue.toLowerCase().replaceAll(' ', '');

    setSearchFilmsResult(
      allMovies.filter((movie) => {
        if (CYRILLIC_REGEX.test(searchTextModified)) {
          return !isShortVideos
            ? movie.duration <= DURATION_SHORT_FILM &&
                movie.nameRU.toLowerCase().replaceAll(' ', '').includes(searchTextModified)
            : movie.duration > DURATION_SHORT_FILM &&
                movie.nameRU.toLowerCase().replaceAll(' ', '').includes(searchTextModified);
        } else {
          return !isShortVideos
            ? movie.duration <= DURATION_SHORT_FILM &&
                movie.nameEN.toLowerCase().replaceAll(' ', '').includes(searchTextModified)
            : movie.duration > DURATION_SHORT_FILM &&
                movie.nameEN.toLowerCase().replaceAll(' ', '').includes(searchTextModified);
        }
      }),
    );
    setSearchTextInputValue(searchTextInputValue);
  };

  useEffect(() => {
    localStorage.setItem('isShortVideos', isShortVideos);
    localStorage.setItem('searchTextInputValue', JSON.stringify(searchTextInputValue));
    localStorage.setItem('searchFilmsResult', JSON.stringify(searchFilmsResult));
  }, [isShortVideos]);

  useEffect(() => {
    localStorage.setItem('searchTextInputValue', JSON.stringify(searchTextInputValue));
    localStorage.setItem('searchFilmsResult', JSON.stringify(searchFilmsResult));
  }, [searchFilmsResult]);

  async function compareToken(TOKEN) {
    if (TOKEN && logedIn) {
      try {
        await getUserInfo();
      } catch {
        await handleLogOut();
      }
    }
  }

  useEffect(() => {
    const TOKEN = localStorage.getItem('jwt');
    if (TOKEN) {
      handleGetMovies();
    }
  }, [userInfo]);

  useEffect(() => {
    const TOKEN = localStorage.getItem('jwt');
    if (TOKEN && logedIn) {
      compareToken(TOKEN);
    }
  });

  useEffect(() => {
    const TOKEN = localStorage.getItem('jwt');

    if (TOKEN) {
      Promise.all([handleGetInfoUser(), handleGetAllMovies(), handleGetMovies()]).then(() => {
        if (localStorage.getItem('jwt')) {
          setLogedIn(true);
        } else {
          navigate('/signin', { replace: true });
        }
      });
    } else {
      Promise.all([handleGetAllMovies()]).then(() => {
        setSearchFilmsResult(allMovies);
        localStorage.setItem('searchFilmsResult', JSON.stringify(allMovies));
      });
    }
  }, []);

  const onClickButtonSearch = (event) => {
    event.preventDefault();
    const searchTextModified = searchTextInputValue.toLowerCase().replaceAll(' ', '');
    setSearchFilmsResult(
      allMovies.filter((movie) => {
        if (CYRILLIC_REGEX.test(searchTextModified)) {
          return isShortVideos
            ? movie.duration <= DURATION_SHORT_FILM &&
                movie.nameRU.toLowerCase().replaceAll(' ', '').includes(searchTextModified)
            : movie.duration > DURATION_SHORT_FILM &&
                movie.nameRU.toLowerCase().replaceAll(' ', '').includes(searchTextModified);
        } else {
          return isShortVideos
            ? movie.duration <= DURATION_SHORT_FILM &&
                movie.nameEN.toLowerCase().replaceAll(' ', '').includes(searchTextModified)
            : movie.duration > DURATION_SHORT_FILM &&
                movie.nameEN.toLowerCase().replaceAll(' ', '').includes(searchTextModified);
        }
      }),
    );
  };

  //Получить все фильмы из стороннего API для дальнейшей работы с ними
  async function handleGetAllMovies() {
    setIsLoadingVisible(true);
    try {
      const allMoviesResponse = await getAllMovies();
      setAllMovies(allMoviesResponse);
    } catch (err) {
      console.log(err);
      setIsInfoToolTipVisible(true);
      setInfoMessage('Произошла ошибка при попытке получения всех фильмов из стороннего API!');
    } finally {
      setIsLoadingVisible(false);
      isInfoToolTipVisible &&
        setTimeout(() => {
          setIsInfoToolTipVisible(false);
          setInfoMessage('');
        }, 4500);
    }
  }

  //ЮЗЕРЫ

  async function handleGetInfoUser() {
    setIsLoadingVisible(true);
    try {
      const response = await getUserInfo();
      setUserInfo({ id: response._id, email: response.email, name: response.name });
    } catch (err) {
      console.log(err);
      setIsInfoToolTipVisible(true);
      setInfoMessage('Произошла ошибка при попытке запроса информации о пользователе!');
      await handleLogOut();
    } finally {
      setIsLoadingVisible(false);
      isInfoToolTipVisible &&
        setTimeout(() => {
          setIsInfoToolTipVisible(false);
          setInfoMessage('');
        }, 4500);
    }
  }

  async function handleLoginUser({ email, password }) {
    setIsLoadingVisible(true);
    try {
      const response = await loginUser({ email, password });
      const token = await response.token;
      localStorage.setItem('jwt', token);
      setLogedIn(true);
      await handleGetInfoUser();
      await handleGetMovies();

      localStorage.setItem(
        'searchFilmsResult',
        JSON.stringify(
          allMovies.filter((movie) => {
            return movie.duration > DURATION_SHORT_FILM;
          }),
        ),
      );

      setSearchFilmsResult(JSON.parse(localStorage.getItem('searchFilmsResult')));

      navigate('/movies', { replace: true });
    } catch (err) {
      console.log(err);
      setIsInfoToolTipVisible(true);
      setInfoMessage('Произошла ошибка при попытке логина! Исправьте логин/пароль');
    } finally {
      setIsLoadingVisible(false);
      isInfoToolTipVisible &&
        setTimeout(() => {
          setIsInfoToolTipVisible(false);
          setInfoMessage('');
        }, 4500);
    }
  }

  async function handleRegisterUser({ email, password, name }) {
    setIsLoadingVisible(true);
    try {
      const response = await createUser({ email, password, name });
      const response2 = await loginUser({ email, password });
      const token = await response2.token;
      localStorage.setItem('jwt', token);
      setLogedIn(true);
      await handleGetInfoUser(token);
      navigate('/movies', { replace: true });
    } catch (err) {
      console.log(err);
      setIsInfoToolTipVisible(true);
      setInfoMessage(
        'Произошла ошибка при попытке регистрации профиля! Исправьте логин/пароль/имя',
      );
    } finally {
      setIsLoadingVisible(false);
      setTimeout(() => {
        setIsInfoToolTipVisible(false);
        setInfoMessage('');
      }, 4500);
    }
  }

  async function handleUpdateUser({ email, name }) {
    setIsLoadingVisible(true);
    try {
      console.log('Запуск');
      const response = await updateUser({ email, name });
      setUserInfo({ email: response.email, name: response.name });
      setInfoMessage('Вы успешно изменили настройки профиля!');
      setIsInfoToolTipVisible(true);
    } catch (err) {
      console.log(err);
      setIsInfoToolTipVisible(true);
      setInfoMessage('Произошла ошибка при попытке изменения профиля! Исправьте логин/имя');
    } finally {
      setIsLoadingVisible(false);
      isInfoToolTipVisible &&
        setTimeout(() => {
          setIsInfoToolTipVisible(false);
          setInfoMessage('');
        }, 4500);
    }
  }

  async function handleLogOut() {
    setIsLoadingVisible(true);

    try {
      setUserInfo({ email: '', name: '' });
      localStorage.removeItem('jwt');
      localStorage.removeItem('searchTextInputValue');
      localStorage.removeItem('searchFilmsResult');
      localStorage.removeItem('isShortVideos');

      setSearchFilmsResult([]);
      setSearchTextInputValue('');
      setLogedIn(false);
      navigate('/', { replace: true });
    } catch (err) {
      console.log(err);
      setIsInfoToolTipVisible(true);
      setInfoMessage('Произошла ошибка при попытке выхода из профиля');
    } finally {
      setIsLoadingVisible(false);
      isInfoToolTipVisible &&
        setTimeout(() => {
          setIsInfoToolTipVisible(false);
          setInfoMessage('');
        }, 4500);
    }
  }

  //ФИЛЬМЫ
  async function handleCreateMovie({
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
    movieId,
  }) {
    try {
      const response = await createMovie({
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
        movieId,
      });
      setSavedMovies([response, ...savedMovies]);
    } catch (err) {
      console.log(err);
      setIsInfoToolTipVisible(true);
      setInfoMessage('Произошла ошибка при попытке добавления фильма в избранное!');
    } finally {
      isInfoToolTipVisible &&
        setTimeout(() => {
          setIsInfoToolTipVisible(false);
          setInfoMessage('');
        }, 4500);
    }
  }

  async function handleGetMovies() {
    setIsLoadingVisible(true);
    try {
      setIsPreloaderVisible(true);
      const response = await getMovies();
      //await handleGetInfoUser();
      setSavedMovies(response.filter((movie) => movie.owner === userInfo.id));
    } catch (err) {
      console.log(err);
      setIsInfoToolTipVisible(true);
      setInfoMessage('Произошла ошибка при попытке получения информации о сохраненных фильмах!');
    } finally {
      setIsLoadingVisible(false);
      setIsPreloaderVisible(false);
      isInfoToolTipVisible &&
        setTimeout(() => {
          setIsInfoToolTipVisible(false);
          setInfoMessage('');
        }, 4500);
    }
  }

  async function handleDeleteMovie(movieId) {
    try {
      const findedMovieId = savedMovies.filter((movie) => movie.movieId === movieId)[0]._id;
      setSavedMovies([...savedMovies.filter((movie) => movie.movieId !== movieId)]);
      const response = await deleteMovie(findedMovieId);
    } catch (err) {
      setIsInfoToolTipVisible(true);
      setInfoMessage('Произошла ошибка при попытке удаления фильма!');
    } finally {
      isInfoToolTipVisible &&
        setTimeout(() => {
          setIsInfoToolTipVisible(false);
          setInfoMessage('');
        }, 4500);
    }
  }

  return (
    <CurrentUserContext.Provider value={userInfo}>
      {isLoadingVisible && <LoadingAnimation />}
      <div className={styles.app}>
        {isInfoToolTipVisible && (
          <InfoToolTip
            infoMessage={infoMessage}
            setIsInfoToolTipVisible={setIsInfoToolTipVisible}
            pathname={pathname}
          />
        )}
        {(pathname === '/movies' ||
          pathname === '/saved-movies' ||
          pathname === '/' ||
          pathname === '/profile') && <Header pathname={pathname} logedIn={logedIn} />}

        <Routes>
          <Route path="/" element={<Main />} />
          <Route
            path="/movies"
            element={
              <ProtectedRoute
                element={Movies}
                isShortVideos={isShortVideos}
                logedIn={logedIn}
                isPreloaderVisible={isPreloaderVisible}
                movies={allMovies}
                handleCreateMovie={handleCreateMovie}
                handleDeleteMovie={handleDeleteMovie}
                savedMovies={savedMovies}
                searchTextInputValue={searchTextInputValue}
                setSearchTextInputValue={setSearchTextInputValue}
                searchFilmsResult={searchFilmsResult}
                setSearchFilmsResult={setSearchFilmsResult}
                pathname={pathname}
                onChangeToggle={onChangeToggle}
                onClickButtonSearch={onClickButtonSearch}
              />
            }
          />
          <Route
            path="/saved-movies"
            element={
              <ProtectedRoute
                element={SavedMovies}
                isPreloaderVisible={isPreloaderVisible}
                logedIn={logedIn}
                movies={savedMovies}
                handleDeleteMovie={handleDeleteMovie}
                pathname={pathname}
              />
            }
          />
          <Route
            path="/profile"
            element={
              <ProtectedRoute
                element={Profile}
                logedIn={logedIn}
                handleLogOut={handleLogOut}
                handleUpdateUser={handleUpdateUser}
                setInfoMessage={setInfoMessage}
                setIsInfoToolTipVisible={setIsInfoToolTipVisible}
              />
            }
          />

          <Route
            path="/signin"
            element={
              <Login
                isLogedIn={logedIn}
                handleLoginUser={handleLoginUser}
                handleGetAllMovies={handleGetAllMovies}
                allMovies={allMovies}
              />
            }
          />
          <Route
            path="/signup"
            element={<Register isLogedIn={logedIn} handleRegisterUser={handleRegisterUser} />}
          />
          <Route path="*" element={<NotFound navigate={navigate} />} />
        </Routes>
        {(pathname === '/movies' || pathname === '/saved-movies' || pathname === '/') && <Footer />}
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
