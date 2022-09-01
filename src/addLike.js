const likeKey = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/dImTscUKayMKYeImrygj/likes/'

const get = (id) => {
    fetch(likeKey)
  .then((res) => res.json())
  .then((data) => console.log(data))
  .catch((error) => error);
}

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
    console.log(e.target.id);
    post(likeKey,e.target.id);
    get(e.target.id)
}

export default addLike;