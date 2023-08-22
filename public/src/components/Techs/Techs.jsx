import styles from './Techs.module.scss';

const Techs = () => {
  return (
    <section id="techs" className={`${styles.landingBlock} ${styles.techs}`}>
      <div className={styles.slide}>
        <h2 className={styles.slide__header}>Технологии</h2>
      </div>

      <div className={styles.techs__info}>
        <h3 className={styles.techs__header}>7 технологий</h3>
        <p className={styles.techs__text}>
          На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.
        </p>
      </div>
      <div className={styles.techs__blocks}>
        <div className={styles.techs__block}>
          <p className={styles.techs__blockText}>HTML</p>
        </div>
        <div className={styles.techs__block}>
          <p className={styles.techs__blockText}>CSS</p>
        </div>
        <div className={styles.techs__block}>
          <p className={styles.techs__blockText}>JS</p>
        </div>
        <div className={styles.techs__block}>
          <p className={styles.techs__blockText}>React</p>
        </div>
        <div className={styles.techs__block}>
          <p className={styles.techs__blockText}>Git</p>
        </div>
        <div className={styles.techs__block}>
          <p className={styles.techs__blockText}>Express.js</p>
        </div>
        <div className={styles.techs__block}>
          <p className={styles.techs__blockText}>Mongodb</p>
        </div>
      </div>
    </section>
  );
};

export default Techs;
