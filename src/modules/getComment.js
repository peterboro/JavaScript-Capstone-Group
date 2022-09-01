const commentsApiKey = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/XAL29eekekrMc3kTORyS/comments';
const getComment = async (movieId) => {
  const response = await fetch(`${commentsApiKey}?item_id=${movieId}`);
  return response.json();
};
export default getComment;