import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p className={styles.sources}>Учебный проект Яндекс.Практикум х BeatFilm.</p>
      <div className={styles.footer__bottom}>
        <div className={styles.copyright}>© {new Date().getFullYear()}</div>

        <div className={styles.footer__links}>
          <a
            className={styles.footer__link}
            target="_blank"
            rel="noreferrer"
            href="https://practicum.yandex.ru">
            Яндекс.Практикум
          </a>
          <a
            className={styles.footer__link}
            target="_blank"
            rel="noreferrer"
            href="https://github.com/Numarta">
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
