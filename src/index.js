//import './style.css';

const MAIN_URL = ' https://api.tvmaze.com/shows ';
import getMovies from "./modules/getMovies.js";

getMovies(MAIN_URL);

// const getMovies = async () => {
//   const showMovies = await fetch('https://api.tvmaze.com/shows?page=1');
//   const data = await showMovies.json();
//   return data;
// }

