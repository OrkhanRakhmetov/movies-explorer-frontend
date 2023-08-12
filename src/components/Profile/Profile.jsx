import React from 'react';
import "./Profile.css"

function Profile({ handleSubmit }) {

  return (

    <section className="profile">
      <div className="profile__container">
        <h1 className="profile__title">
          Привет, Виталий!
        </h1>
        <form className="profile__form"
          onSubmit={handleSubmit}
        >
          <label className="profile__form-label" htmlFor="name">
            Имя
            <input
              className="profile__input"
              type="text"
              id="name"
              name="name"
              placeholder="Введите имя"
              required
              minLength="2"
            />
          </label>

          {/* <span className="profile__input-message">
            Что-то пошло не так...
          </span> */}
          <label
            className="profile__form-label"
            htmlFor="email"
          >
            E&#8209;mail
            <input
              className="profile__input"
              label="E-mail"
              type="email"
              id="email"
              name="email"
              placeholder="Введите E-mail"
              required
              minLength="3"
            />
          </label>

        </form>

        <button
          className="profile__edit-button hover-effect"
          type="submit"
        >
          Редактировать
        </button>
        <button
          className="profile__logout hover-effect"
        >
          Выйти из аккаунта
        </button>
      </div>
    </section>
  )
}

export default Profile