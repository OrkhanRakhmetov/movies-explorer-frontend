import React from 'react';
import { Routes, Route, Link, Outlet } from 'react-router-dom';
import NavTab from '../NavTab/NavTab';
import Logo from '../Logo/Logo';
import MoviesNav from '../MoviesNav/MoviesNav';
import AccountBtn from '../AccountBtn/AccountBtn';

import './Header.css';

function Header({ handleOpenBurgerMenu }) {
  return (
    <>
      <header className="header">
        <Routes>
          <Route path="/" element={
            <>
              <Logo />
              <NavTab />
            </>
          } />
          <Route path="movies" element={
            <>
              <Logo />
              <MoviesNav />
              <AccountBtn />
              <button
                className="burger"
                type="button"
                onClick={handleOpenBurgerMenu} />
            </>
          } />
          <Route path="saved-movies" element={
            <>
              <Logo />
              <MoviesNav />
              <AccountBtn />
              <button
                className="burger"
                type="button"
                onClick={handleOpenBurgerMenu}
              />
            </>
          } />
          <Route path="profile" element={
            <>
              <Logo />
              <MoviesNav />
              <AccountBtn />
              <button
                className="burger button-hover"
                type="button"
                onClick={handleOpenBurgerMenu}
              />
            </>
          } />
        </Routes>
      </header>
      <Outlet />
    </>
  )
}

export default Header;