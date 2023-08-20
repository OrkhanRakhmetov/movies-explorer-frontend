import styles from './AboutProject.module.scss';

const AboutProject = () => {
  return (
    <section id="about-project" className={`${styles.landingBlock} ${styles.aboutproject}`}>
      <div className={styles.slide}>
        <h2 className={styles.slide__header}>О проекте</h2>
      </div>

      <div className={styles.articles}>
        <div className={styles.article}>
          <h3 className={styles.article__header}>Дипломный проект включал 5 этапов</h3>
          <p className={styles.article__text}>
            Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные
            доработки.
          </p>
        </div>

        <div className={styles.article}>
          <h3 className={styles.article__header}>На выполнение диплома ушло 5 недель</h3>
          <p className={styles.article__text}>
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы
            успешно защититься.
          </p>
        </div>
      </div>

      <div className={styles.progress}>
        <div className={styles.progress__line}>
          <div className={`${styles.progress__block} ${styles.progress__leftblock}`}>
            <p className={styles.progress__blocktext}>1 неделя</p>
          </div>
          <div className={`${styles.progress__block} ${styles.progress__rightblock}`}>
            <p className={styles.progress__blocktext}>4 недели</p>
          </div>
        </div>

        <div className={styles.progress__captions}>
          <div className={`${styles.progress__caption} ${styles.progress__caption_leftblock}`}>
            <p className={styles.progress__captionText}>Back-end</p>
          </div>
          <div className={`${styles.progress__caption} ${styles.progress__caption_rightblock}`}>
            <p className={styles.progress__captionText}>Front-end</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutProject;
