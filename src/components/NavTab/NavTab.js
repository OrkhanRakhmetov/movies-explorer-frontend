import '../NavTab/NavTab.css'

function NavTab() {
    return (
      <div className="nav">
      <button className='nav__button'>Регистрация</button>
      <button className='nav__button nav__button_type_login'>Войти</button>
      </div>
    );
  }

  export default NavTab;