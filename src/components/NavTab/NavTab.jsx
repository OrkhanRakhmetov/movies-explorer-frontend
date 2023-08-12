import React from 'react';
import { Link } from 'react-router-dom';

import '../NavTab/NavTab.css'

function NavTab() {
  return (
    <div className="nav">
      <Link
        className="nav__button hover-effect"
        to="/signup">Регистрация</Link>
      <Link
        className="nav__button nav__button_type_login hover-effect"
        to="/signin">Войти</Link>
    </div>
  );
}

export default NavTab;