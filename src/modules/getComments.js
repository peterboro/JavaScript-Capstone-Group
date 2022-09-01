const getMovieComment = async (movieId) => {
    const response = await fetch(`${commentApi}?item_id=${movieId}`);
    return response.json();
  };
export default getMovieComment;