import popupHtml from "./popupHTML.js";
import getMovieComment from "./getComments.js";
import closePopup from "./closePopup.js";
const commentCounter = (data) => (typeof (data) === 'object' ? data.length : 'invalid');

const commentApi = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/8yDe1k19rnGIEx3fLHSF/comments';

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

const commentPopup = async (movieId) => {
  await getData(movieId).then((data) => {
    popup.innerHTML = popupHtml(data,movieId); //Imported the popup html
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
  if (e.target.matches('.comments')) {
    commentPopup(e.target.id);
    const comment = await getMovieComment(e.target.id);
    commentCounter(comment);
    updateCommentCounter(e.target.id);
  }
});

export {commentPopup, commentCounter};