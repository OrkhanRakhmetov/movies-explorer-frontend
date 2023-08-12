import React from 'react';
import './AboutProject.css';
import HeadTitle from "../HeadTitle/HeadTitle"

function AboutProject() {
  return (
    <section className="about-project" id="about-project">
      <div className="about-project__content">
        <HeadTitle text='О проекте' />
        <ul className="about-project__desc">
          <li className="about-project__desc-item">
            <h3 className="about-project__desc-title">Дипломный проект включал 5 этапов</h3>
            <p className="about-project__desc-text">
              Составление плана, работу над бэкендом, вёрстку,
              добавление функциональности и финальные доработки.
            </p>
          </li>
          <li className="about-project__desc-item">
            <h3 className="about-project__desc-title">На выполнение диплома ушло 5 недель</h3>
            <p className="about-project__desc-text">
              У каждого этапа был мягкий и жёсткий дедлайн,
              которые нужно было соблюдать, чтобы успешно защититься.
            </p>
          </li>
        </ul>

        <ul className='about-project__stages'>
          <li className='about-project__stage-item'>
            <h4 className='about-project__stage-title'>1 неделя</h4>
            <p className='about-project__stage-text'>Back-end</p>
          </li>
          <li className='about-project__stage-item about-project__stage-item_type_big'>
            <h4 className='about-project__stage-title about-project__stage-title_grey'>4 недели</h4>
            <p className='about-project__stage-text'>Front-end</p>
          </li>
        </ul>

      </div>
    </section>
  )
}

export default AboutProject;