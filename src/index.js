//import './style.css';

const MAIN_URL = 'https://api.tvmaze.com/shows';

// const main = document.getElementById('main');



// const getMovies = (url) => {
//   fetch(url).then(res => res.json()).then(data => {
//     showMovies(data.results);
//     console.log(data.results);
//   })
// };

// getMovies(MAIN_URL);

// const showMovies = (data) => {

//   main.innerHTML = ``;

//   data.forEach((movies) => {
//     const {name, image} = movies;
//     const movieEl = document.createElement('div');
//     movieEl.classList.add('movie');
//     movieEl.innerHTML = `
//     <img src="${image.original}" alt="${name}">

//     <div class="movie-info">
//       <h3>${name}</h3>
//     </div>


//     `
//     main.appendChild(movieEl);
    
//   });
  
// }
// const showMovies = getMovies.slice(0, 30).map((data) => {

//   main.innerHTML = ``;

//   data.forEach((movies) => {
//     const {name, image} = movies;
//     const movieEl = document.createElement('div');
//     movieEl.classList.add('movie');
//     movieEl.innerHTML = `
//     <img src="${image.original}" alt="${name}">

//     <div class="movie-info">
//       <h3>${name}</h3>
//     </div>


//     `
//     main.appendChild(movieEl);
//   })
// })
  

// const options = {

// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '05439d0610msh1dc21c2d2a44d53p1a915ajsna66f003dbe91',
// 		'X-RapidAPI-Host': 'tvjan-tvmaze-v1.p.rapidapi.com'
// 	}
// };

// fetch('https://tvjan-tvmaze-v1.p.rapidapi.com/shows/1', options)
// 	.then(response => response.json())
// 	.then(response => console.log(response))
// 	.catch(err => console.error(err));


