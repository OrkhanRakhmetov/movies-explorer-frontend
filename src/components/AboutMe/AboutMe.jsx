import React from 'react';
import { Link } from 'react-router-dom';
import "./AboutMe.css"
import photo from "../../images/photo.jpeg"
import HeadTitle from "../HeadTitle/HeadTitle"
import Portfolio from '../Portfolio/Portfolio';

function AboutMe() {
  return (

    <section className="aboutme">
      <div className="aboutme__content">
        <HeadTitle text="Студент" />
        <div className="aboutme__contatiner">
          <div className="aboutme__text">
            <h2 className="aboutme__text-title">Орхан Рахметов</h2>
            <p className="aboutme__text-subtitle">Фронтенд-разработчик, 35 лет</p>
            <p className="aboutme__text-description">
              Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена
              и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.
            </p>
            <Link to="https://github.com/OrkhanRakhmetov"
              className="aboutme__text-github-link hover-effect"
              target="_blank"
            >
              Github
            </Link>
          </div>
          <img className="aboutme__photo" src={photo} alt="фото разработчика" />
        </div>
        <Portfolio />
      </div>
    </section>

  )
}

export default AboutMe