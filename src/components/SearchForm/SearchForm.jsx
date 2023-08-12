import React from 'react';

import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

import './SearchForm.css';

function SearchForm() {
  return (
    <section className='search-form'>
      <form
        className="search-form__form"
      >
        <input
          className="search-form__input"
          placeholder="Фильм"
          required
        />
        <input
          className="search-form__submit"
          type="submit"
          value=" "
        />
      </form>
      <FilterCheckbox />
    </section>
  )
}

export default SearchForm;