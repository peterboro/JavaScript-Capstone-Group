const showMovies = (data) => {
  data.forEach((m) => {
    const movieEl = document.querySelector('.movie-info'); 
    const html = `
      <div class="movie">
        <img src='${m.image.medium}' alt="image">
        <div class="movie-header">
            <h3>${m.name}</h3>
            <i class="fa-solid fa-heart"></i>
        </div>
        <div class="btns"> 
            <button class="comment">Comment</button>
            <button class="reservaton">Reservation</button>
        </div>       
      </div> 
      `;
    movieEl.insertAdjacentHTML('afterbegin', html);
  });
};
export default showMovies;