import React from 'react';
import { Link } from "react-router-dom"
import "./Register.css"
import Logo from "../Logo/Logo"
import AuthInput from "../AuthInput/AuthInput"
import AuthButton from "../AuthButton/AuthButton"

function Register() {



  return (
    <div className="register">
      <div className="register__container">
        <Logo />
        <h1 className="register__title">Добро пожаловать!</h1>
        <form className="register__form">
          <div className="register__form-input">
            <AuthInput
              label="Имя"
              name='name'
              id="name"
              type="text"
              placeholder="Введите имя"
              minLength="2"
              maxLength='40'
            />
            <AuthInput
              label="E-mail"
              name='email'
              id="email"
              type="email"
              placeholder="Введите E-mail"
              minLength="6"
              maxLength='40'
            />
            <AuthInput
              label="Пароль"
              name='password'
              id="password"
              type="password"
              placeholder="Введите Пароль"
              minLength="6"
              maxLength='40'  
            />
           <span className="register__input-message">
            Что-то пошло не так...
          </span>
          </div>

          <div className="register__form-submit-button">
            <AuthButton
              textButton="Зарегистрироваться"
            />
          </div>
        </form>
        <div className="register__bottom-text-container">
          <span className="register__bottom-text-question hover-effect">
            Уже зарегистрированы?
          </span>
          <Link
            className="register__bottom-text-link hover-effect"
            to="/signin"
          >
            Войти
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Register;