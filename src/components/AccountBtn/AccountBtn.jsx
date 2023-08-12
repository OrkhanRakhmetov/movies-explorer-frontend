import React from 'react';
import { Link } from 'react-router-dom';

import './AccountBtn.css';

function AccountBtn() {
  return (
    <div className="accountbtn">
    <Link
      className="accountbtn__button hover-effect"
      to="/profile"
    >
      Аккаунт
    </Link>
    </div>
  );
}

export default AccountBtn;