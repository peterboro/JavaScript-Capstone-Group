import showMovies from './displayMovies.js';

const getMovies = (url) => {
  fetch(url)
    .then((response) => response.json())
    .then((json) => showMovies(
      json.filter((movie) => movie.id < 31)
      .filter((m) => m.name !== 'Once Upon a Time in Wonderland')));
};
export default getMovies;
