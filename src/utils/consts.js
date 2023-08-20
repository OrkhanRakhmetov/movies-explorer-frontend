export const BASE_URL_API = 'https://api.numart.nomoredomains.work';
export const MOVIE_URL_API = 'https://api.nomoreparties.co/beatfilm-movies';
export const AUTH_HEADERS = {
  Authorization: `Bearer ${localStorage.getItem('jwt')}`,
  'Content-Type': 'application/json',
};

export const DURATION_SHORT_FILM = 40;
