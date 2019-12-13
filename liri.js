require("dotenv").config();
var fs = require("fs");
var axios = require("axios");
var Spotify = require('node-spotify-api');

//Had to find a work-around for Spotify. Kept getting errors with line given in Homework Instructions
var spotify = new Spotify({
    id: process.env.SPOTIFY_ID,
    secret: process.env.SPOTIFY_SECRET
});

var keys = require("./keys.js");
var request = require("request")
var moment = require("moment");

var inputOne = process.argv[2];
var inputTwo = process.argv[3];

for (var i = 4; i < process.argv.length; i++) {
    inputTwo += '+' + process.argv[i];
}

switch (inputOne) {
    case ('concert-this'):
        if (inputTwo) {
            concert(inputTwo);
        } else {
            var inputTwo = "Journey";
            concert(inputTwo);
        }
        break;

    case ('spotify-this-song'):
        if (inputTwo) {
            spotifyMe(inputTwo);
        } else {
            var inputTwo = "The Sign Ace of Base";
            spotifyMe(inputTwo);
        }
        break;

    case ('movie-this'):
        if (inputTwo) {
            movie(inputTwo);
        } else {
            var inputTwo = "Mr. Nobody";
            movie(inputTwo);
        }
        break;

    case ('do-what-it-says'):
        doSomething();
        break;
};

function concert() {
    var queryUrl =
        "https://rest.bandsintown.com/artists/" + inputTwo + "/events?app_id=codingbootcamp";
    // console.log(queryUrl);
    request(queryUrl, function (error, response, body) {
        var pbody = JSON.parse(body);

        if (!error) {
            console.log("Searching for: " + inputTwo);
            pbody.forEach(function (element) {
                console.log("------------------------------");
                console.log("Venue Name: " + element.venue.name);
                console.log("Venue Location: " + element.venue.city + ", " + element.venue.region + " " + element.venue.country);
                console.log("Date: " + moment(element.datetime).format("MM/DD/YYYY"));
            });
            console.log("-------------------");
            console.log("| End of Results. |")
            console.log("-------------------");
        } else {
            console.log("Oops, Something went wrong!");
        }
    });

    // * Name of the venue
    // * Venue location
    // * Date of the Event (use moment to format this as "MM/DD/YYYY")
}

function spotifyMe() {
    spotify.search({
        type: 'track',
        query: inputTwo,
        limit: 1
    }, function (err, data) {
        if (!err) {
            console.log("Searching for: " + inputTwo);
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
                console.log("Searching for: " + inputTwo);
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
    fs.readFile("random.txt", "utf8", function (error, data) {
        if (error) {
            return console.log(error);
        }
        var data = data.split(",");
        var doThis = data[0];
        var withThis = data[1];

        inputOne = doThis;
        inputTwo = withThis;
        spotifyMe();
    });
}