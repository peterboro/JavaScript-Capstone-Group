const commentCounter = (data) => (typeof (data) === 'object' ? data.length : 'invalid');

const commentApi = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/8yDe1k19rnGIEx3fLHSF/comments';
const getMovieComment = async (movieId) => {
  const response = await fetch(`${commentApi}?item_id=${movieId}`);
  return response.json();
};

const popup = document.querySelector('.comment-popup');

const getTotalComments = async (movieId) => {
  const result = await getMovieComment(movieId)
  .then((comment) => (!comment.error ? comment.length : 0))
  .catch(() => 0);
  return result;
};

const updateCommentCounter = (movieId) => {
  getTotalComments(movieId).then((totalComment) => {
    popup.querySelector('.total-comments').innerHTML = totalComment;
  });
};

const commentApiEnd = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/8yDe1k19rnGIEx3fLHSF/comments';
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
  const response = await post(commentApiEnd, params);
  return response;
};

const getData = async (movieId) => {
  const response = await get(`${movieApi}/${movieId}`);
  return response;
};

const displayMovieComments = (data) => {
  popup.querySelector('.comments').innerHTML = data;
};

const showComments = (movieId) => {
  getMovieComment(movieId).then((data) => {
    if (!data.error) {
      let comments = '';
      data.forEach((comment) => {
        comments += `<li class="comments-list">${comment.creation_date} <span> ${comment.username}:</span>  ${comment.comment}</li>`;
      });
      displayMovieComments(comments);
    } else {
      displayMovieComments('No comment posted yet.');
    }
  });
};

const closePopup = () => {
  document.querySelector('.close').addEventListener('click', () => {
    popup.style.display = 'none';
    popup.innerHTML = '';
    document.body.style.overflow = 'visible';
  });
};



const commentPopup = async (movieId) => {
  await getData(movieId).then((data) => {
    popup.innerHTML = `
    <div class= "popup">
    <button class="close"><i class="fa fa-times" aria-hidden="true"></i></button>
    <div class = "container">
    <div class = "display">
    <div class = "description">
    <img src='${data.image}' alt="image">
    <h3>'${data.name}'</h3>
    </div>
    <div class="display-detail">
    <h3> Details </h3>
    <ul>
    <li> '${data.summary}' </li>
    <li><strong>Genres:</strong> ${data.genres}</li>
    <li><strong>Ratings:</strong> ${data.rating}</li>
    </ul>
    </div>
    </div>
    <div class = "comment-container">
    <div class = "comment-display">
    <h3 class = "counter"> Comments (<span class = "total-comments">0</span>)</h3>
    <ul class = "comments">

    </ul>
    </div>
    <div class = "comment">
    <div class = "add-comment">
    <h3>Add Comment</h3>
    </div>
    <form class="form">
    <input type="text" name="name" id="name" placeholder="Your name" required>
    <textarea name="description" id="description" cols="30" rows="10"
        placeholder="Your Comment" required></textarea>
    <button id=${movieId} type="submit" class="submit-btn">Comment</button>
  </form>
  </div>
  </div>
  </div>
  </div>`;
  showComments(movieId);

  const form = popup.querySelector('.form');
  form.addEventListener('submit', (e) => {
    e.prevenDefault();
    const user = form.elements.name.value;
    const description = form.elements.description.value;
    addComment({
      item_id: movieId,
      username: user,
      comment: description,
    })
    .then(() => {
      showComments(movieId);
      updateCommentCounter(movieId);
      form.reset();
    });
  });
  });
  popup.style.display = 'block';
  closePopup();
};

document.addEventListener('click', async (e) => {
  if (e.target.matches('.comment')) {
    commentPopup(e.target.id);
    const comment = await getMovieComment(e.target.id);
    commentCounter(comment);
    updateCommentCounter(e.target.id);
  }
});

export {commentPopup, commentCounter};