# Liri-Node-App

**LIRI** is like iPhone's **SIRI**. However, while **SIRI** is a Speech Interpretation and Recognition Interface, **LIRI** is a _Language_ Interpretation and Recognition Interface. **LIRI** will be a command line node app that takes in parameters and gives you back data.

**LIRI** will search Spotify for songs, Bands in Town for concerts, and OMDB for movies.

As this app is run from the CLI, it takes user input in a systematic way and displays a response in the Command Line based on the user's input. 

To run this app yourself, you must aquire your own unique API keys.

Typing these inputs in the Command Line will yield something like:
**node liri concert-this 'band name here'**
![Liri](/concertThis.JPG)
Running this line will display to the user a comprehensive look at upcoming concerts the searched band is putting on.
 
Typing these inputs in the Command Line will yield something like:
**node liri spotify-this-song 'song name here'**
![Liri](/spotifyThis.JPG)
Running this line will display to the user information about the searched song: Artist/Band name, and album, as well as a link to a sound clip of the song.
  
Typing these inputs in the Command Line will yield something like:
**node liri movie-this 'movie title here'**
![Liri](/movieThis.JPG)
Running this line will display to the user information about the searched movie: Release Date, IMDB Rating, Languages Available, and the Plot.
  
Typing these inputs in the Command Line will yield something like:
**node liri do-what-it-says**
![Liri](/doWhat.JPG)
Running this line will display something pre-determined by an outside text file.
