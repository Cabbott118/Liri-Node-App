require("dotenv").config();

var axios = require("axios");

// var keys = require("./keys.js");
// var spotify = new Spotify(keys.spotify);


var inputOne = process.argv[2];
var inputTwo = process.argv[3];

//While Loop to allow more than one word for search query
while (process.argv[inputTwo] !== undefined) {
    inputTwo += process.argv[inputTwo] + " ";
    inputTwo++;
}


switch (inputOne) {
    case ('concert-this'):
        concert();
        break;

    case ('spotify-this-song'):
        spotify();
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

function spotify() {
    console.log("Getting Music!");
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