const showMovies = (data) => {
  data.forEach((m) => {
    const movieEl = document.querySelector('.movie-info');
    const html = `
      <div class="movie">
        <img src='${m.image.medium}' alt="image">
        <div class="movie-header">
            <h3>${m.name}</h3>
            <div class="liked">
                <i class="fa-solid fa-heart" id=${m.id}></i>
                <span id=${m.id}>${1} likes</span>
            </div>
        </div>
        <div class="btns"> 
            <button id="${m.id}" class="comments">Comment</button>
            <button class="reservaton">Reservation</button>
        </div>       
      </div> 
      `;
    movieEl.insertAdjacentHTML('afterbegin', html);
  });
};
export default showMovies;