import getAllComments from './getAllComments.js';
import commentPopup from './comments.js';

const updateCounter = (movieId) => {
  getAllComments(movieId).then((totalComment) => {
    commentPopup.querySelector('.total-comments').innerHTML = totalComment;
  });
};
export default updateCounter;