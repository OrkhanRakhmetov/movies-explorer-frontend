import styles from './LoadingAnimation.module.scss';

const LoadingAnimation = () => {
  return (
    <div className={`${styles.animation}`}>
      <div className={`${styles.windows8}`}>
        <div className={`${styles.wBall}`} id={`${styles.wBall_1}`}>
          <div className={`${styles.wInnerBall}`}></div>
        </div>
        <div className={`${styles.wBall}`} id={`${styles.wBall_2}`}>
          <div className={`${styles.wInnerBall}`}></div>
        </div>
        <div className={`${styles.wBall}`} id={`${styles.wBall_3}`}>
          <div className={`${styles.wInnerBall}`}></div>
        </div>
        <div className={`${styles.wBall}`} id={`${styles.wBall_4}`}>
          <div className={`${styles.wInnerBall}`}></div>
        </div>
        <div className={`${styles.wBall}`} id={`${styles.wBall_5}`}>
          <div className={`${styles.wInnerBall}`}></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingAnimation;
