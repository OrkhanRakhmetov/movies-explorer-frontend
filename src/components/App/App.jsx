import React from 'react';

import CurrentUserContext from "../../contexts/CurrentUserContext";
import Main from '../Main/Main';
import './App.css';

function App() {

  return (
    <CurrentUserContext.Provider>
      <div className="App">
        <Main />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;