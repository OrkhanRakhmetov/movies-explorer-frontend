import { BASE_URL_API } from './consts';
import { AUTH_HEADERS } from './consts';

//USERS

export const getUserInfo = async () => {
  try {
    const infoUser = await fetch(`${BASE_URL_API}/users/me`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('jwt')}`,
        'Content-Type': 'application/json',
      },
    });
    const response = await infoUser.json();

    if (!response.message) {
      return await response;
    } else {
      return Promise.reject('Произошла ошибка при входе');
    }
  } catch (err) {
    return Promise.reject(`Произошла ошибка: ${err.status}`);
  }
};

export const createUser = async ({ name, email, password }) => {
  return fetch(`${BASE_URL_API}/signup`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password, name }),
  }).then((res) => (res.ok ? res.json() : Promise.reject(`Произошла ошибка: ${res.status}`)));
};

export const loginUser = async ({ email, password }) => {
  return fetch(`${BASE_URL_API}/signin`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  }).then((res) => (res.ok ? res.json() : Promise.reject(`Произошла ошибка: ${res.status}`)));
};

export const updateUser = async ({ name, email }) => {
  return fetch(`${BASE_URL_API}/users/me`, {
    method: 'PATCH',
    headers: {
      Authorization: `Bearer ${localStorage.getItem('jwt')}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, name }),
  }).then((res) => (res.ok ? res.json() : Promise.reject(`Произошла ошибка: ${res.status}`)));
};

//MOVIES

export const getMovies = async () => {
  const response = await fetch(`${BASE_URL_API}/movies`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${localStorage.getItem('jwt')}`,
      'Content-Type': 'application/json',
    },
    // }).then((res) => ({res.ok ? res.json() : Promise.reject(`Произошла ошибка: ${res.status}`)));
  });
  return response.ok ? response.json() : [];
  // .then((res) => {
  //   return res.ok ? res.json() : [];
  // });
};

export const createMovie = async (film) => {
  return fetch(`${BASE_URL_API}/movies`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${localStorage.getItem('jwt')}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      country: film.country,
      director: film.director,
      duration: film.duration,
      year: film.year,
      description: film.description,
      image: film.image,
      trailerLink: film.trailerLink,
      thumbnail: film.thumbnail,
      nameRU: film.nameRU,
      nameEN: film.nameEN,
      movieId: film.movieId,
    }),
  }).then((res) => (res.ok ? res.json() : Promise.reject(`Произошла ошибка: ${res.status}`)));
};

export const deleteMovie = async (movieId) => {
  return fetch(`${BASE_URL_API}/movies/${movieId}`, {
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${localStorage.getItem('jwt')}`,
      'Content-Type': 'application/json',
    },
    // }).then((res) => (res.ok ? res.json() : Promise.reject(`Произошла ошибка: ${res.status}`)));
  }).then((res) => (res.ok ? res.json() : Promise.reject(`Произошла ошибка: ${res.status}`)));
};
