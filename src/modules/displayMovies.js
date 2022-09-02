import addLike from "./addLike.js";
import getLikes from "./getLike.js";

const getLike = async () => {
  const res = await getLikes(); 
  return res;
}

const response = await getLike();
console.log(response)
const showMovies = (data) => {
  data.forEach((m,i) => {
    const movieEl = document.querySelector('.movie-info');
    // console.log(i)
    const html = `
      <div class="movie">
        <img src='${m.image.medium}' alt="image">
        <div class="movie-header">
            <h3>${m.name}${i+1}</h3>
            <div class="liked">
                <i class="fa-solid fa-heart" id=${i+1}></i>
                <span class="span" id='s${i+1}'> ${response[i]?response.filter(r => r.item_id === `item${i+1}`)[0]?.likes:'0'} likes</span>
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
    document.addEventListener('click', async(e) => {   
        addLike(e); 
        const response = await getLike();
        if (e.target.matches('.fa-heart')) { 
          const spans = e.target.parentNode.querySelector(`[id = 's${e.target.id}']`);
          spans.innerHTML =  response.filter(res => res.item_id === `item${e.target.id}`)[0].likes + 1 + ' likes';
          console.log("in",e.target.id,response.filter(res => res.item_id === `item${e.target.id}`)[0].likes + 1);
        }
    })
};
export default showMovies;