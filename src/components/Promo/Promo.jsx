import React from 'react';
import promo_img from "../../images/promo-img.svg";

import './Promo.css'

function Promo() {
  return (
    <div className="promo">
      <div className="promo__wrapper">
        <div className="promo__text">
          <div className="promo__desc">
            <h1 className="promo__title">Учебный проект студента факультета Веб&#8209;разработки.</h1>
            <h2 className="promo__subtitle">Листайте ниже, чтобы узнать больше про этот проект и его создателя.</h2>
          </div>
          <img className='promo__img' src={promo_img} alt="Изображение планеты" />
        </div>

        <a
          className='promo__button hover-effect'
          href="/#about-project">
          Узнать больше
        </a>
      </div>
    </div>

  );
}

export default Promo;