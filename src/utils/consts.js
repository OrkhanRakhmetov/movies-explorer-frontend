export const BASE_URL = 'api.numart.nomoredomains.work';
export const MOVIE_URL = 'https://api.nomoreparties.co';
export const HEADERS = {
  Authorization: `Bearer ${localStorage.getItem('jwt')}`,
  'Content-Type': 'application/json',
};
export const CYRILLIC_REGEX = /[а-яё]/i;
