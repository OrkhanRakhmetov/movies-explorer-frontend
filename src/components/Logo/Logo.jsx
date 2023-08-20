import React from 'react';
import { Link } from 'react-router-dom';
import './Logo.css';


function Logo({ closeBurgerMenu }) {
  return (
    <Link to='/'>
      <div
        className="logo hover-effect"
        onClick={closeBurgerMenu} />
    </Link>
  );
}

export default Logo;