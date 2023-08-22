import closeimage from '../../images/icon-close.svg';

import styles from './InfoToolTip.module.scss';

const InfoToolTip = ({ infoMessage, setIsInfoToolTipVisible, pathname }) => {
  function setToolTipVisible() {
    setIsInfoToolTipVisible(false);
  }

  return (
    <div className={`${styles.tooltip} ${styles.tooltip_visible}`}>
      <img
        onClick={setToolTipVisible}
        className={`${styles.tooltip__close}`}
        src={closeimage}
        alt="закрыть уведомление"
      />
      <div className={styles.tooltip__container}>
        <div className={`${styles.tooltip__imageBottomWrapper} ${styles.tooltip__imageWrapper}`}>
          <img
            className={`${styles.tooltip__image} ${styles.tooltip__image_left}`}
            src="https://i.gifer.com/embedded/download/YQDm.gif"
            alt="подбадривающая картинка"
          />
        </div>

        <div className={styles.tooltip__textWrapper}>
          <h3 className={styles.tooltip__header}>Внимание!</h3>
          <p className={styles.tooltip__text}>{infoMessage}</p>
          <p className={styles.tooltip__joke}>
            {pathname === '/profile'
              ? 'Поздравляем! Пользуйтесь нашим приложением дальше!'
              : `Пожалуйста, обратитесь в нашу службу поддержки, чтобы сообщить детали ошибки и сделать
            эту работу за нас. Мы так тестируем сайт за ваш счет! Спасибо, что помогаете нам
            безбедно жить и не утруждаться, удачи!`}
          </p>
        </div>

        <div className={`${styles.tooltip__imageWrapper} ${styles.tooltip__imageBottomWrapper}`}>
          <img
            className={`${styles.tooltip__image} ${styles.tooltip__image_right}`}
            src="https://i.gifer.com/embedded/download/YQDm.gif"
            alt="подбадривающая картинка"
          />
        </div>
      </div>
    </div>
  );
};

export default InfoToolTip;
