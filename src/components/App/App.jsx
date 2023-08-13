import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';

import CurrentUserContext from '../../contexts/CurrentUserContext.js';

import Header from '../Header/Header';
import Preloader from '../Preloader/Preloader'
import Main from '../Main/Main.jsx';
import Footer from '../Footer/Footer.jsx';
import PageNotFound from '../PageNotFound/PageNotFound.jsx';
import Register from '../Register/Register.jsx';
import Login from '../Login/Login.jsx';
import Profile from '../Profile/Profile.jsx';
import Movies from '../Movies/Movies.jsx';
import SavedMovies from '../SavedMovies/SavedMovies.jsx';
import BurgerMenu from '../BurgerMenu/BurgerMenu';

import './App.css';

function App() {

  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);

  function handleOpenBurgerMenu() {
    setIsBurgerMenuOpen(true);
  }

  function handleCloseBurgerMenu() {
    setIsBurgerMenuOpen(false);
  }


  return (
    <>
      <CurrentUserContext.Provider>
        <Routes>
          <Route path="/" element={
            <Header
              isBurgerMenuOpen={isBurgerMenuOpen}
              handleOpenBurgerMenu={handleOpenBurgerMenu}
              handleCloseBurgerMenu={handleCloseBurgerMenu}
            />} >
            <Route index element={
              <>
                <Main />
                <Footer />
              </>
            } />
            <Route path="movies" element={
              <>
                <Movies />
                <Footer />
              </>
            } />
            <Route path="saved-movies" element={
              <>
                <SavedMovies />
                <Footer />
              </>
            } />
            <Route path="profile" element={
              <Profile />
            } />
          </Route>
          <Route path="/signup" element={
            <Register />
          } />
          <Route path="/signin" element={
            <Login />
          } />
          <Route path="*" element={
            <PageNotFound />
          } />
        </Routes>
        <BurgerMenu isOpen={isBurgerMenuOpen} onClose={handleCloseBurgerMenu} />
        <Preloader />
      </CurrentUserContext.Provider>
    </>
  );
}

export default App;