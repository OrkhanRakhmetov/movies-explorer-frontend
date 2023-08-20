import React, { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

import { CurrentUserContext } from '../../contexts/CurrentUserContext';

import { films } from '../../utils/fakedb';
import { savedFilms } from '../../utils/fakedb';

import Header from '../Header';
import Footer from '../Footer';
import Main from '../Main';
import ErrorToolTip from '../ErrorToolTip';
import Movies from '../Movies';
import SavedMovies from '../SavedMovies';
import Register from '../Register';
import Login from '../Login';
import Profile from '../Profile';
import NotFound from '../NotFound';

import styles from './App.module.scss';

function App() {
  const { pathname } = useLocation();
  const [userInfo, setUserInfo] = React.useState({
    name: 'Булат',
    email: 'bulat@mail.com',
    password: '!qwertY1',
  });
  const [logedIn, setLogedIn] = React.useState(true);
  const [isErrorToolTipVisible, setIsErrorToolTipVisible] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState('');

  // useEffect(() => {
  //   setIsErrorToolTipVisible(true);
  //   setErrorMessage('Ошибка при запросе API');
  //   setTimeout(() => {
  //     setIsErrorToolTipVisible(false);
  //     setErrorMessage('');
  //   }, 4000);
  // });

  return (
    <CurrentUserContext.Provider value={userInfo}>
      <div className={styles.app}>
        {(pathname === '/movies' ||
          pathname === '/saved-movies' ||
          pathname === '/' ||
          pathname === '/profile') && <Header pathname={pathname} logedIn={logedIn} />}
        {isErrorToolTipVisible && (
          <ErrorToolTip isErrorToolTipVisible={isErrorToolTipVisible} errorMessage={errorMessage} />
        )}
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/movies" element={<Movies movies={films} />} />
          <Route path="/saved-movies" element={<SavedMovies movies={savedFilms} />} />
          <Route
            path="/profile"
            element={<Profile userInfo={userInfo} setLogedIn={setLogedIn} />}
          />
          <Route
            path="/signin"
            element={<Login isLogedIn={logedIn} setLogedIn={setLogedIn} userInfo={userInfo} />}
          />
          <Route
            path="/signup"
            element={
              <Register
                setUserInfo={setUserInfo}
                isLogedIn={logedIn}
                setLogedIn={setLogedIn}
                userInfo={userInfo}
              />
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
        {(pathname === '/movies' || pathname === '/saved-movies' || pathname === '/') && <Footer />}
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
