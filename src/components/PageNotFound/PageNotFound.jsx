import React from 'react';
import "./PageNotFound.css"
import { useNavigate } from 'react-router-dom';

function NotFoundPage() {

  const navigate = useNavigate();

  function goBack() {
    return navigate(-1);
  }

  return (
    <section className="notfound">
      <h2 className="notfound__title">404</h2>
      <p className="notfound__subtitle">Страница не найдена</p>
      <button
        className="notfound__button"
        type="button"
        onClick={goBack}
      >
        Назад
      </button>
    </section>
  )
}

export default NotFoundPage