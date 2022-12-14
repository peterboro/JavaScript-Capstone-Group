const getCounter = (data) => (typeof (data) === 'object' ? data.length : 'invalid');

const commentsApiKey = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/XAL29eekekrMc3kTORyS/comments';
const getComment = async (movieId) => {
  const response = await fetch(`${commentsApiKey}?item_id=${movieId}`);
  return response.json();
};

const commentPopup = document.querySelector('.comment-popup');
const getAllComments = async (movieId) => {
  const result = await getComment(movieId)
    .then((comment) => (!comment.error ? comment.length : 0))
    .catch(() => 0);
  return result;
};

const updateCounter = (movieId) => {
  getAllComments(movieId).then((totalComment) => {
    commentPopup.querySelector('.total-comments').innerHTML = totalComment;
  });
};

const commentApiEndpoint = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/XAL29eekekrMc3kTORyS/comments';
const movieApi = 'https://api.tvmaze.com/shows';

const get = (url) => fetch(url)
  .then((res) => res.json())
  .then((data) => data)
  .catch((error) => error);

const post = (url, params = {}) => fetch(url, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(params),
}).then((res) => res.text())
  .then((data) => (data.error
    ? { error: true, info: data }
    : { error: false, info: data }))
  .catch((error) => ({ error: true, info: error }));

const addComment = async (params) => {
  const response = await post(commentApiEndpoint, params);
  return response;
};

const getMovieData = async (movieId) => {
  const response = await get(`${movieApi}/${movieId}`);
  return response;
};

const displayComments = (data) => {
  commentPopup.querySelector('.comments').innerHTML = data;
};

const showComments = (movieId) => {
  getComment(movieId).then((data) => {
    if (!data.error) {
      let comments = '';
      data.forEach((comment) => {
        comments += `<li class="comments-list">${comment.creation_date} <span> ${comment.username}:</span>  ${comment.comment}</li>`;
      });
      displayComments(comments);
    } else {
      displayComments('No comment posted yet.');
    }
  });
};

const closePopup = () => {
  document.querySelector('#close').addEventListener('click', () => {
    commentPopup.style.display = 'none';
    commentPopup.innerHTML = '';
    document.body.style.overflow = 'visible';
  });
};

const showCommentPopup = async (movieId) => {
  updateCounter(movieId);
  await getMovieData(movieId).then((data) => {
    commentPopup.innerHTML = `<div class="popup">
    <button id="close"><i class="fa fa-times" aria-hidden="true"></i></button>
    <div class="container">
        <div class="display">
          <div class="description">
            <img src=${data.image.medium} alt="Movie image">
            <h3 class="movie-title">${data.name}</h3>
          </div>
          <div class="display-detail">
           <ul>
             <li>${data.summary}</li> 
             <li><strong>Date of Release:</strong> ${data.premiered}</li>
             <li><strong>Genres:</strong> ${data.genres}</li>                 
             <li><strong>Rating:</strong> ${data.rating.average}</li>                 
           </ul>  
          </div>
        </div>
      <div class="comment-container">
        <div class="comment-display">
          <h3 class='counter'>Comments(<span class="total-comments">0</span>)</h3>
          <ul class="comments">
          </ul>
        </div>
        <div class="comment">
        <div class="add-comment">
          <h3>Add Comment</h3>
        </div>
        <form class="form">
          <input type="text" name="name" id="name" placeholder="Provide your Name Please!" required>
          <textarea name="description" id="description" cols="30" rows="10"
              placeholder="We'd LOVE to know what you think of the Movie!" required></textarea>
          <button id=${movieId} type="submit" class="submit-btn">Comment</button>
        </form>
      </div>
      </div>
    </div>
  </div>`;
    showComments(movieId);

    const form = commentPopup.querySelector('.form');
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const user = form.elements.name.value;
      const description = form.elements.description.value;
      addComment({
        item_id: movieId,
        username: user,
        comment: description,
      }).then(() => {
        showComments(movieId);
        updateCounter(movieId);
        form.reset();
      });
    });
  });
  commentPopup.style.display = 'block';
  closePopup();
};

document.addEventListener('click', async (e) => {
  if (e.target.matches('.comment')) {
    showCommentPopup(e.target.id);
    const comment = await getComment(e.target.id);
    getCounter(comment);
    updateCounter(e.target.id);
  }
});

export { showCommentPopup, getCounter };