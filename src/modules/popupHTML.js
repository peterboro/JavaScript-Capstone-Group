const popupHtml = (data, movieId) => `
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
  </div>
`;
export default popupHtml;