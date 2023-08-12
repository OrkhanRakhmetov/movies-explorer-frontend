import React from 'react';

import './FilterCheckbox.css';

function FilterCheckbox() {
  return (
    <>
      <label className='filter-checkbox'>
        <input
        type='checkbox' className='filter-checkbox__checkbox-invisible' />
        <span className='filter-checkbox__checkbox-visible filter-checkbox__checkbox-visible_checked'></span>
        <p className='filter-checkbox__text'>Короткометражки</p>
      </label>
    </>
  );
}

export default FilterCheckbox;