var argthree = process.argv[3]
var argfour = process.argv[4]

//* `my-tweets`

//var cmd = require('node-cmd');

if (argthree = 'my-tweets'){

var keys = require('./keys.js');
var twitterKeys = keys.twitterKeys;

//console.log(twitterKeys);

var Twitter = require('twitter');

var client = new Twitter(
  twitterKeys
);

var params = {q: 'liri.js', screen_name: 'captainkatie3', count: '20'};
client.get('search/tweets/', params, function(error, tweets, response) {
  if (!error) {

  	for (var i=0; i<tweets.length; i++){
    console.log(tweets[i].text + tweets[i].created_at);
}
  }
});

}

//* `spotify-this-song`

else if (argthree = 'spotify-this-song'){

var spotifyApi = require('spotify-web-api-node');

//spotifyApi.setAccessToken('spotify-this-song');

spotifyApi.searchTracks(argfour)
  .then(function(error, data) {
    if (!error){
    	console.log(JSON.parse(data).body.artists + JSON.parse(data).body.album + JSON.parse(data).body.name);
    }
  });

}

//* `movie-this`

else if (argthree = 'movie-this'){

var request = require('request');

// Then run a request to the OMDB API with the movie specified
request('http://www.omdbapi.com/?t=' + argfour + '&y=&plot=short&r=json&tomatoes=true', function (error, response, body) {

	// If the request is successful (i.e. if the response status code is 200)
	if (!error && response.statusCode == 200) {

		// Parse the body of the site
		console.log(JSON.parse(body).title + JSON.parse(body).year + JSON.parse(body).imdb.rating)
	}
});

}

//if argtwo = 'do-what-it-says'{}

//* `do-what-it-says`