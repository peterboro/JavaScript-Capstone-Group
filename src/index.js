//import './style.css';

const MAIN_URL = ' https://api.tvmaze.com/shows ';



const getMovies = (url) => {
  fetch(url).then(res => res.json()).then(data => {
    showMovies(data.results);
  })
}

getMovies(MAIN_URL);

// const getMovies = async () => {
//   const showMovies = await fetch('https://api.tvmaze.com/shows?page=1');
//   const data = await showMovies.json();
//   return data;
// }

const showMovies = (data) => {
  data.forEach(movie => {
    const movieEl = document.querySelector('.movie-info'); 
    movieEl.innerHTML = `
    <img src="" alt="image">
    <div class="movie-info">
      <h3> Movie Titlees</h3>
    </div>
    `
    
  });
}
