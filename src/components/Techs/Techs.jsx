import HeadTitle from "../HeadTitle/HeadTitle"
import "./Techs.css"

function Techs() {
  return (

    <section className="techs">
      <div className="techs__content">
        <HeadTitle text="Технологии" />
        <div className="techs__container">
          <h2 className="techs__title">7 технологий</h2>
          <p className="techs__subtitle">
            На курсе веб-разработки мы освоили технологии, которые применили в
            дипломном проекте.
          </p>
          <ul className="techs__cards">
            <li className='techs__cards-item'>HTML</li>
            <li className='techs__cards-item'>CSS</li>
            <li className='techs__cards-item'>JS</li>
            <li className='techs__cards-item'>React</li>
            <li className='techs__cards-item'>Git</li>
            <li className='techs__cards-item'>Express.js</li>
            <li className='techs__cards-item'>momgoDB</li>
          </ul>
        </div>
      </div >
    </section >

  )
}

export default Techs