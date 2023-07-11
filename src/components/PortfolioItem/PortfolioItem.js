import { Link } from 'react-router-dom';
import "./PortfolioItem.css"

function PortfolioItem({ link, text }) {
  return (
    <li className="portfolio-item">
      <Link
        className="portfolio__link"
        to={link}
        target="_blank"
      >
        <p className="portfolio__link-text">{text}</p>
        <span className="portfolio__link-text">↗</span>
      </Link>
    </li>
  )
}

export default PortfolioItem;