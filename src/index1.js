const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '05439d0610msh1dc21c2d2a44d53p1a915ajsna66f003dbe91',
		'X-RapidAPI-Host': 'tvjan-tvmaze-v1.p.rapidapi.com'
	}
};

fetch('https://tvjan-tvmaze-v1.p.rapidapi.com/shows/1', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));