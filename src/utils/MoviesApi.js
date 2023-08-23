import { MOVIE_URL_API } from './consts';

export const getAllMovies = () => {
  return fetch(MOVIE_URL_API, {
    method: 'GET',
  }).then(
    (movies) => movies.json(),
    (err) => Promise.reject(`Ошибка: ${err.status}`),
  );
};
