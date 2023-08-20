import React from 'react';
import { Link } from 'react-router-dom';

import '../Footer/Footer.css';

function Footer() {
  return (
    <footer className='footer'>
      <div className='footer__content'>
        <p className='footer__title'>Учебный проект Яндекс.Практикум х BeatFilm.</p>
        <div className='footer__container'>
          <p className='footer__date'>&copy; {(new Date()).getFullYear()}</p>
          <ul className='footer__list'>
            <li className='footer__item'>
              <Link to="https://practicum.yandex.ru/"
                className="footer__link hover-effect"
                target="_blank"
              >
                Яндекс.Практикум
              </Link>
            </li>
            <li className='footer__item'>
              <Link to="https://github.com/OrkhanRakhmetov"
                className="footer__link hover-effect"
                target="_blank"
              >
                Github
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer;