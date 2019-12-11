require("dotenv").config();

var axios = require("axios");

var Spotify = require('node-spotify-api');
//Had to find a work-around for Spotify. Kept getting errors with line given in Homework Instructions
var spotify = new Spotify({
    id: process.env.SPOTIFY_ID,
    secret: process.env.SPOTIFY_SECRET
});

var keys = require("./keys.js");

var inputOne = process.argv[2];
var inputTwo = process.argv[3];

for (var i = 4; i < process.argv.length; i++) {
    inputTwo += '+' + process.argv[i];
}

switch (inputOne) {
    case ('concert-this'):
        concert();
        break;

    case ('spotify-this-song'):
        if (inputTwo) {
            spotifyMe(inputTwo);
        } else {
            spotifyMe("The Sign");
        }
        break;

    case ('movie-this'):
        movie();
        break;

    case ('do-what-it-says'):
        doSomething();
        break;
};

function concert() {
    // "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp"
    console.log("Getting Concert!");
}

function spotifyMe(song) {
    spotify.search({
        type: 'track',
        query: song,
        limit: 1
    }, function (err, data) {
        if (!err) {
            for (var i = 0; i < data.tracks.items.length; i++) {
                
                console.log("------------------------------");
                console.log("Artist: " + data.tracks.items[i].artists[0].name);
                console.log("Song: " + data.tracks.items[i].name);
                console.log("Album: " + data.tracks.items[i].album.name);
                console.log("Preview Link (CTRL/CMD Click): " + data.tracks.items[i].preview_url);
                console.log("------------------------------");

            }
        } else {
            return console.log('Error occurred: ' + err);
        }
    });
}

function movie() {

    var queryUrl = "http://www.omdbapi.com/?t=" + inputTwo + "&y=&plot=short&apikey=trilogy";
    // console.log(queryUrl);

    axios.get(queryUrl).then(
            function (response) {
                // console.log(response);
                console.log("------------------------------");
                console.log("Movie Title: " + response.data.Title);
                console.log("Release Date: " + response.data.Released);
                console.log("IMDB Rating: " + response.data.imdbRating);
                console.log("Available Languages: " + response.data.Language);
                console.log("Plot: " + response.data.Plot);
                console.log("Actors: " + response.data.Actors);
                console.log("------------------------------");


            })
        .catch(function (error) {
            if (error.response) {

                console.log("---------------Data---------------");
                console.log(error.response.data);
                console.log("---------------Status---------------");
                console.log(error.response.status);
                console.log("---------------Status---------------");
                console.log(error.response.headers);
            } else if (error.request) {

                console.log(error.request);

            } else {

                console.log("Error", error.message);
            }
            console.log(error.config);
        });
}

function doSomething() {
    console.log("Getting Something Cool!");
}