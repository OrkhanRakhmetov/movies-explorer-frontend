import React from 'react';

import styles from './ErrorToolTip.module.scss';

const ErrorToolTip = ({ isErrorToolTipVisible, errorMessage }) => {
  return (
    <div className={`${styles.tooltip} ${isErrorToolTipVisible && styles.tooltip_visible}`}>
      <div className={styles.tooltip__container}>
        <h3 className={styles.tooltip__header}>Произошла ошибка!</h3>
        <p className={styles.tooltip__text}>{errorMessage}</p>
      </div>
    </div>
  );
};

export default ErrorToolTip;
