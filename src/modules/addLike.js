const likeKey = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/dImTscUKayMKYeImrygj/likes/'
import getLikes from "./getLike.js";


const post = (url, id) => fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
        likes : 1,
        item_id : `item${id}`
    }),
  }).then((res) => res.json()) 
    .catch((error) => ({ error: true, info: error }));

const addLike = (e) => { 
    post(likeKey,e.target.id); 
}

export default addLike;