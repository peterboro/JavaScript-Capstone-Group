import getComment from './getComment.js';

const getAllComments = async (movieId) => {
  const result = await getComment(movieId)
    .then((comment) => (!comment.error ? comment.length : 0))
    .catch(() => 0);
  return result;
};
export default getAllComments;