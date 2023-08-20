import React from 'react';
import PortfolioItem from '../PortfolioItem/PortfolioItem'
import './Portfolio.css';

function Portfolio() {
  return (

    <section className="portfolio">
      <div className="portfolio__content">
        <h2 className="portfolio__title">Портфолио</h2>
        <ul className="portfolio__links">

          <PortfolioItem link="https://github.com/OrkhanRakhmetov/how-to-learn" text="Статичный сайт" />

          <PortfolioItem link="https://github.com/OrkhanRakhmetov/russian-travel" text="Адаптивный сайт" />

          <PortfolioItem link="https://github.com/OrkhanRakhmetov/react-mesto-auth" text="Одностраничное приложение" />

        </ul>
      </div >
    </section >

  );
}

export default Portfolio;