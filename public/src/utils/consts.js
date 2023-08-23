export const BASE_URL_API = 'https://api.numart.nomoredomains.work';
export const MOVIE_URL_API = 'https://api.nomoreparties.co/beatfilm-movies';
export const AUTH_HEADERS = {
  Authorization: `Bearer ${localStorage.getItem('jwt')}`,
  'Content-Type': 'application/json',
};

export const COMP_SCREEN_WIDTH = 1280;
export const TABLET_SCREEN_WIDTH = 715;
export const COMP_COUNT_FILMS = 12;
export const TABLET_COUNT_FILMS = 8;
export const MOBILE_COUNT_FILMS = 5;

export const COMP_ETC_COUNT_FILMS = 3;
export const MOBILE_ETC_COUNT_FILMS = 2;

export const DURATION_SHORT_FILM = 40;
