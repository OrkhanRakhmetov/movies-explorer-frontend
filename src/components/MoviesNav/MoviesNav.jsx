import React from 'react';
import { Link } from 'react-router-dom';

import './MoviesNav.css';

function MoviesNav() {
  return (
    <nav className="moviesnav">
      <ul className="moviesnav__list">
        <li>
          <Link
            className="moviesnav__link  moviesnav__link_activ hover-effect"
            to="/movies"
          >Фильмы</Link>
        </li>
        <li>
          <Link
            className="moviesnav__link hover-effect"
            to="/saved-movies"
          >Сохранённые фильмы</Link>
        </li>
      </ul>
    </nav>
  );
}

export default MoviesNav;

