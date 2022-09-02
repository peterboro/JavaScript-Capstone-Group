const getLikes = async () => {
  const response = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/dImTscUKayMKYeImrygj/likes/')
    .then((res) => res.json())
    .then((data) => data);
  return response;
};
export default getLikes;