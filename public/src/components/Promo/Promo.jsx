import NavTab from '../NavTab';

import styles from './Promo.module.scss';

const Promo = () => {
  return (
    <div className={styles.promo}>
      <div className={styles.promo__container}>
        <h1 className={styles.header}>Учебный проект студента факультета Веб-разработки.</h1>
        <NavTab />
      </div>
    </div>
  );
};

export default Promo;
