const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '9ebcb246e2msh74898c09d833210p128b76jsnf7b9d8e09c77',
		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
	}
};

fetch('https://youtube-v31.p.rapidapi.com/captions?part=snippet&videoId=M7FIvfx5J10', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));