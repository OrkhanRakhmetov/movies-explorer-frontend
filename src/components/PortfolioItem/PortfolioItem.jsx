import React from 'react';
import { Link } from 'react-router-dom';
import "./PortfolioItem.css"

function PortfolioItem({ link, text }) {
  return (
    <li className="portfolio__item">
      <Link
        className="portfolio__link hover-effect"
        to={link}
        target="_blank"
      >
        <p className="portfolio__link-text">{text}</p>
        <span className="portfolio__link-simbol hover-effect">↗</span>
      </Link>
    </li>
  )
}


export default PortfolioItem;