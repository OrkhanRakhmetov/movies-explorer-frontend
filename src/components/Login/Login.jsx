import React from 'react';
import { Link } from "react-router-dom"
import "./Login.css"
import Logo from "../Logo/Logo"
import AuthInput from "../AuthInput/AuthInput"
import AuthButton from "../AuthButton/AuthButton"

function Login() {

  return (
    <div className="login">
      <div className="login__container">
        <Logo />
        <h1 className="login__title">Рады видеть!</h1>
        <form className="login__form">

          <div className="login__form-input">
            <AuthInput
              label="E-mail"
              name='email'
              id="email"
              type="email"
              placeholder="Введите E-mail"
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
          </div>

          <div className="login__form-submit-button">
            <AuthButton
              textButton="Войти"
            />
          </div>

        </form>
        <div className="login__bottom-text-container">
          <span className="login__bottom-text-question">
            Ещё не зарегистрированы?
          </span>
          <Link
            className="login__bottom-text-link hover-effect"
            to="/signup"
          >
            Регистрация
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Login;