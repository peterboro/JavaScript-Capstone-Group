const showMovies = (data) => {
    data.forEach(m => {
      const movieEl = document.querySelector('.movie-info'); 
      console.log(m)
      const html = `
      <div class="movie">
        <img src='${m.image.medium}' alt="image">
        <div>
            <h3>${m.name}</h3>
            <i class="fa-solid fa-heart"></i>
        </div>
      </div> 
      `;
      movieEl.insertAdjacentHTML('afterbegin',html)
    });
}
export default showMovies;