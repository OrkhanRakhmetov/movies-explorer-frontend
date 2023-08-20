import { Link } from 'react-router-dom';

import styles from './NotFound.module.scss';

const NotFound = () => {
  return (
    <main className={styles.notfound}>
      <h1 className={styles.notfound__header}>404</h1>
      <p className={`${styles.notfound__text}`}>Страница не найдена</p>
      <Link to="/" className={`${styles.notfound__link}`}>
        Назад
      </Link>
    </main>
  );
};

export default NotFound;
