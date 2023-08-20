import styles from './NotFound.module.scss';

const NotFound = ({ navigate }) => {
  return (
    <main className={styles.notfound}>
      <h1 className={styles.notfound__header}>404</h1>
      <p className={`${styles.notfound__text}`}>Страница не найдена</p>
      <button
        onClick={(event) => {
          navigate(-1);
        }}
        type="button"
        className={`${styles.notfound__link}`}>
        Назад
      </button>
    </main>
  );
};

export default NotFound;
