import { Link } from 'react-router-dom';

import logo from '../../images/logomain.svg';

import Navigation from '../Navigation';

import styles from './Header.module.scss';

const Header = ({ pathname, logedIn }) => {
  return (
    <header className={styles.header}>
      <Link to="/">
        <img src={logo} alt="Логотип сайта" className={styles.logo} />
      </Link>
      <Navigation pathname={pathname} logedIn={logedIn} />
    </header>
  );
};

export default Header;
