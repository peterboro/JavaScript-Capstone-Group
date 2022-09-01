// import './style.css';
import { showCommentPopup } from './modules/comments.js';

import getMovies from './modules/getMovies.js';

const MAIN_URL = 'https://api.tvmaze.com/shows';

getMovies(MAIN_URL);

document.addEventListener('click', (e) => {
  if (e.target.matches('.comments')) {
    showCommentPopup(e.target.id);
  }
  if (e.target.matches('.fa-heart')) {
    console.log('you liked me');
  }
});
