import NavTab from "../NavTab/NavTab"
import header_logo from "../../images/logo.svg";
import header_img from "../../images/header-img.svg";

import './Promo.css'

function Promo() {
  return (
    <div className="promo">
      <header className='promo__header'>
        <img className="promo__logo" src={header_logo} alt="Логотип" />
        <NavTab />
      </header>
      <div className="promo__text">
        <div>
          <h1 className="promo__title">Учебный проект студента факультета Веб-разработки.</h1>
          <h2 className="promo__subtitle">Листайте ниже, чтобы узнать больше про этот проект и его создателя.</h2>
        </div>
        <img className='promo__img' src={header_img} alt="Изображение планеты" />
      </div>
      <button className='promo__button'>Узнать больше</button>
    </div>
  );
}

export default Promo;