// import './style.css';
import { showCommentPopup } from './modules/comments.js'; 
import getMovies from './modules/getMovies.js';
const MAIN_URL = 'https://api.tvmaze.com/shows';

getMovies(MAIN_URL);

// const items = document.querySelector('.movie-info');

// movieNbr.innerHTML = items.children.length; 
// console.log(items.children)
document.addEventListener('click', (e) => { 
  if (e.target.matches('.comments')) {
    showCommentPopup(e.target.id);
  }
  if (e.target.matches('.fa-heart')) {
    
    // console.log('movie', items.length )
  }
});
