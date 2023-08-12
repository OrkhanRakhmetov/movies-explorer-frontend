import React from 'react';
import { NavLink, Link } from 'react-router-dom';

import './BurgerMenu.css';

function BurgerMenu() {
  return (
    <section className="burger-menu">
      <div className="burger-menu__content">
        <nav>
          <button
            className="burger-menu__close-btn"
          />
          <ul className="burger-menu__nav">
            <li className="burger-menu__nav-li">
              <NavLink
                className={"burger-menu__nav-link hover-effect"}
                to="/">
                Главная
              </NavLink>
            </li>
            <li className="burger-menu__nav-li">
              <NavLink
                className={"burger-menu__nav-link burger-menu__nav-link_active hover-effect"}
                to="/movies">
                Фильмы
              </NavLink>
            </li>
            <li className="burger-menu__nav-li">
              <NavLink
                className={"burger-menu__nav-link hover-effect"}
                to="/saved-movies"
              >
                Сохранённые фильмы
              </NavLink>
            </li>
          </ul>
        </nav>
        <div className="burger-menu__auth">
          <Link
            className="burger-menu__button hover-effect"
            to="/profile"
          >
            Аккаунт
            <div className="burger-menu__icon"></div>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default BurgerMenu;