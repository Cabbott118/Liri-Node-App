require("dotenv").config();
var keys = require("./keys.js");
var spotify = new Spotify(keys.spotify);

var inputOne = process.argv[2];
var inputTwo = process.argv[3];

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
    console.log("Getting Concert!");
}

function spotify() {
    console.log("Getting Music!");
}

function movie() {
    console.log("Getting Movie!");
}

function doSomething() {
    console.log("Getting Something Cool!");
}



// "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp"

// * `concert-this`

// * `spotify-this-song`

// * `movie-this`

// * `do-what-it-says`

// Commands for liri.js (Switch Case)