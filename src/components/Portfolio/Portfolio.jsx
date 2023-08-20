import linkportfolio from '../../images/linkportfolio.svg';

import styles from './Portfolio.module.scss';

const Portfolio = () => {
  return (
    <div className={styles.portfolio}>
      <h2 className={styles.portfolio__header}>Портфолио</h2>

      <div className={styles.portfolio__links}>
        <a
          className={styles.portfolio__linkBlock}
          target="_blank"
          rel="noreferrer"
          href="https://github.com/">
          <p className={styles.portfolio__link}>Статичный сайт</p>
          <img
            className={styles.portfolio__linkImage}
            src={linkportfolio}
            alt="стрелка ссылки"></img>
        </a>

        <a
          className={styles.portfolio__linkBlock}
          target="_blank"
          rel="noreferrer"
          href="https://github.com/">
          <p className={styles.portfolio__link}>Адаптивный сайт</p>
          <img
            className={styles.portfolio__linkImage}
            src={linkportfolio}
            alt="стрелка ссылки"></img>
        </a>

        <a
          className={styles.portfolio__linkBlock}
          target="_blank"
          rel="noreferrer"
          href="https://github.com/">
          <p className={styles.portfolio__link}>Одностраничное приложение</p>
          <img
            className={styles.portfolio__linkImage}
            src={linkportfolio}
            alt="стрелка ссылки"></img>
        </a>
      </div>
    </div>
  );
};

export default Portfolio;
