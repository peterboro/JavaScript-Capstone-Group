import showMovies from './displayMovies.js';

const getMovies = (url) => {
  fetch(url)
    .then((response) => response.json())
    .then((json) => showMovies(json.filter((movie) => movie.id < 30)));
};
export default getMovies;
