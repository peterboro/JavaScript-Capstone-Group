// import './style.css';
import {commentPopup} from './modules/comments.js';

import getMovies from './modules/getMovies.js';

const MAIN_URL = 'https://api.tvmaze.com/shows';

getMovies(MAIN_URL);

document.addEventListener('click', (e) => {
  if(e.target.matches('.comment')) {
    console.log(e.target)
    commentPopup(e.target.id); 
  }

})


