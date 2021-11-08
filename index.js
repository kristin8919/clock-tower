var express = require('express');
var bodyParser = require('body-parser');
var Sound = require('node-aplay');

// with ability to pause/resume:
var music = new Sound('./sounds/2bells.wav');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Require the Router we defined in movies.js
//`var movies = require('./movies.js');

//Use the Router on the sub route /movies
//app.use('/movies', movies);

app.get('/', (req, res) => {
    res.send('Hello World, from express');
    music.play();
});
var port = 3000;

app.listen(port, () => console.log(`Hello world app listening on port ${port}!`))
